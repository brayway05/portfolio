import DemoComponent from "./demo.tsx";

const HomePage = () => {

    const demoData = {
        title: 'My Demo Component',
        summary: 'This is a summary of my demo component.',
        photos: [
            {
                src: 'https://via.placeholder.com/500x300',
                caption: 'Photo 1',
            },
            {
                src: 'https://via.placeholder.com/500x300',
                caption: 'Photo 2',
            },
            {
                src: 'https://via.placeholder.com/500x300',
                caption: 'Photo 3',
            },
        ],
    }

    return (
        <div>
            <div className="container mx-auto py-8">
                <DemoComponent
                    title={demoData.title}
                    summary={demoData.summary}
                    photos={demoData.photos}
                />
            </div>
            <div className="container mx-auto py-8">
                <DemoComponent
                    title={demoData.title}
                    summary={demoData.summary}
                    photos={demoData.photos}
                />
            </div>
            <div className="container mx-auto py-8">
                <DemoComponent
                    title={demoData.title}
                    summary={demoData.summary}
                    photos={demoData.photos}
                />
            </div>
        </div>
    )
}

export default HomePage;