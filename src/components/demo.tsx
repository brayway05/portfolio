import React from 'react';

interface Photo {
    src: string;
    caption: string;
}

interface DemoComponentProps {
    title: string;
    link?: string;
    summary: string;
    photos: Photo[];
}

const DemoComponent: React.FC<DemoComponentProps> = ({ title, link, summary, photos }) => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mb-4">
                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer"
                       className="text-2xl font-bold text-blue-600 hover:text-blue-800">
                        {title}
                    </a>
                ) : (
                    <h2 className="text-2xl font-bold">{title}</h2>
                )}
            </div>
            <p className="text-gray-700 mb-6">{summary}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                    <div key={index} className="relative">
                    <img
                            src={photo.src}
                            alt={photo.caption}
                            className="w-full h-auto rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-75 text-white p-2 rounded-b-lg">
                            {photo.caption}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DemoComponent;