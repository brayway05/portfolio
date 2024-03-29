import DemoComponent from "./demo.tsx";

const HomePage = () => {

    const deep_learning_data = {
        title: 'Deep Learning Final Project',
        summary: 'Language/Speech recognition model built off of pre-trained audio detection model',
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

    const category_pricing = {
        title: 'Category Pricing Tool @ <href >Pattern',
        summary: 'Data warehouse analysis on Amazon category revenue trends',
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
    };

    const deep_learning_projects_data = {
        title: 'CS 474 - Deep Learning- Projects',
        link: 'https://github.com/brayway05/Project-Links/blob/main/Deep-Learning-Projects.md',
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
    };

    const computer_vision_projects_data = {
        title: 'CS 450 - Computer Vision - Projects',
        link: 'https://github.com/brayway05/Project-Links/blob/main/Computer-Vision-Projects.md',
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
    };

    return (
        <div>
            <div className="container mx-auto py-8">
                <DemoComponent
                    title={deep_learning_data.title}
                    summary={deep_learning_data.summary}
                    photos={deep_learning_data.photos}
                />
            </div>
            <div className="container mx-auto py-8">
                <DemoComponent
                    title={category_pricing.title}
                    summary={category_pricing.summary}
                    photos={category_pricing.photos}
                />
            </div>
            <div className="container mx-auto py-8">
                <DemoComponent
                    title={deep_learning_projects_data.title}
                    link={deep_learning_projects_data.link}
                    summary={deep_learning_projects_data.summary}
                    photos={deep_learning_projects_data.photos}
                />
            </div>
            <div className="container mx-auto py-8">
                <DemoComponent
                    title={computer_vision_projects_data.title}
                    link={computer_vision_projects_data.link}
                    summary={computer_vision_projects_data.summary}
                    photos={computer_vision_projects_data.photos}
                />
            </div>
        </div>
    )
}

export default HomePage;