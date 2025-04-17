import * as React from 'react';
import JSZip from 'jszip';
import { DataRow, DataTable } from './datatable';
import { ColumnDef } from '@tanstack/react-table';
import { Skeleton } from '@/components/ui/skeleton';

const S3FileViewer = () => {
  const [fileUrl, setFileUrl] = React.useState('');
  const [data, setData] = React.useState<null | any[]>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchFileUrl = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://sglnazugqj.execute-api.us-east-1.amazonaws.com/generate-presigned-url'
        );
        const data = await response.json();
        setFileUrl(data.url);
      } catch (error) {
        console.error('Error fetching presigned URL:', error);
      }
    };

    fetchFileUrl();
  }, []);

  React.useEffect(() => {
    const fetchAndUnzipData = async () => {
      if (!fileUrl) return;

      try {
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        const zip = await JSZip.loadAsync(blob);

        let jsonContent = [];
        for (const [relativePath, file] of Object.entries(zip.files)) {
          if (relativePath.endsWith('.json') && !relativePath.endsWith('.crc')) {
            const text = await file.async('text');
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
          setData(jsonContent);
        } else {
          throw new Error('No valid JSON data found in the zip file');
        }
      } catch (error) {
        console.error('Error fetching or unzipping data from S3:', error);
        setError('Failed to load the data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (fileUrl) {
      fetchAndUnzipData();
    }
  }, [fileUrl]);

  const columns: ColumnDef<DataRow>[] = [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'launch', header: 'Launch' },
    { accessorKey: 'version', header: 'Version' },
    { accessorKey: 'height_km', header: 'Height (km)' },
    { accessorKey: 'latitude', header: 'Latitude' },
    { accessorKey: 'longitude', header: 'Longitude' },
    { accessorKey: 'velocity_kms', header: 'Velocity (km/s)' },
  ];

  return (
    <div className="s3-file-viewer h-full w-full">
      {data ? (
        <DataTable data={data} columns={columns} />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          {loading ? (
            <div className="w-full space-y-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex gap-2">
                  <Skeleton className="h-6 w-60" />
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-6 w-24" />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-500">{error || 'No data available'}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default S3FileViewer;
