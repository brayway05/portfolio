// @ts-ignore
const DemoComponent = ({ title, summary, photos }) => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-6">{summary}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/*@ts-ignore*/}
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