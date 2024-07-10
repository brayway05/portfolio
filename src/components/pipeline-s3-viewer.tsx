import { useState, useEffect } from 'react';
import JSZip from 'jszip';

const S3FileViewer = () => {
  const [fileUrl, setFileUrl] = useState('');
  const [data, setData] = useState<null | any[]>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFileUrl = async () => {
      try {
        const response = await fetch('https://sglnazugqj.execute-api.us-east-1.amazonaws.com/generate-presigned-url');
        const data = await response.json();
        // console.log('Presigned URL:', data.url);
        setFileUrl(data.url);
      } catch (error) {
        console.error('Error fetching presigned URL:', error);
      }
    };

    fetchFileUrl();
  }, []);

  useEffect(() => {
    const fetchAndUnzipData = async () => {
        if (!fileUrl) return;

      try {
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        const zip = await JSZip.loadAsync(blob);
        // console.log('Zip contents:', Object.keys(zip.files));

        let jsonContent = [];
        for (const [relativePath, file] of Object.entries(zip.files)) {
          if (relativePath.endsWith('.json') && !relativePath.endsWith('.crc')) {
            const text = await file.async('text');
            // console.log(`Content of ${relativePath}:`, text);
            if (text.trim()) {
              const lines = text.trim().split('\n');
              for (const line of lines) {
                try {
                  const parsedLine = JSON.parse(line);
                  jsonContent.push(parsedLine);
                } catch (jsonError) {
                  console.error(`Error parsing JSON line: ${line}`, jsonError);
                }
              }
            } else {
              console.warn(`File ${relativePath} is empty.`);
            }
          }
        }


        if (jsonContent.length > 0) {
        //   console.log('Parsed JSON data:', jsonContent);
          setData(jsonContent);
        } else {
          throw new Error('No valid JSON data found in the zip file');
        }
      } catch (error) {
        console.error('Error fetching or unzipping data from S3:', error);
        setError('Failed to load the data. Please try again later.');
      }
    };

    if (fileUrl) {
        fetchAndUnzipData();
      }
  }, []);

  return (
    <div className="s3-file-viewer">
      {data ? (
        <div className="overflow-y-auto max-h-96">
          <table className="min-w-full bg-white shadow-md border-collapse">
            <thead>
              <tr>
                <th className="p-3 text-left">Id</th>
                <th className="p-3 text-left">Launch</th>
                <th className="p-3 text-left">version</th>
                <th className="p-3 text-left">height_km</th>
                <th className="p-3 text-left">latitude</th>
                <th className="p-3 text-left">longitude</th>
                <th className="p-3 text-left">velocity_kms</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{item.id}</td>
                  <td className="p-3">{item.launch}</td>
                  <td className="p-3">{item.version}</td>
                  <td className="p-3">{item.height_km}</td>
                  <td className="p-3">{item.latitude}</td>
                  <td className="p-3">{item.longitude}</td>
                  <td className="p-3">{item.velocity_kms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default S3FileViewer;