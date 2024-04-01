import React from 'react';
import LinkIcon from '@mui/icons-material/Link';

interface Photo {
    src: string;
    caption: string;
}

interface DemoComponentProps {
    title: string;
    github?: string;
    summary: string;
    photos: Photo[];
}

const DemoComponent: React.FC<DemoComponentProps> = ({ title, github, summary, photos }) => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mb-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer"
                       className=" font-bold text-blue-600 hover:text-blue-800">
                        <LinkIcon />
                        Github
                    </a>
                )}
            </div>
            <p className="text-gray-700 mb-6">{summary}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {photos.map((photo, index) => (
                    <div key={index}>
                        <img
                            src={"src/assets/project_images/" + photo.src}
                            alt={photo.caption}
                            className="w-full h-auto rounded-lg"
                        />
                        <div className="bottom-0 left-0 bg-gray-800 bg-opacity-75 text-white p-2 rounded-b-lg">
                            {photo.caption}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DemoComponent;