import DemoComponent from "./demo.tsx";
import Profile from "./profile.tsx";
import profilePic from "../assets/profile_pic.jpeg";

const HomePage = () => {

    const deep_learning_data = {
        title: 'Deep Learning Final Project',
        summary: 'Language/Speech recognition model built off of pre-trained audio detection model',
        photos: [
        ],
    }

    const category_pricing = {
        title: 'Category Pricing Tool @ Pattern',
        summary: 'Data warehouse analysis on Amazon category revenue trends',
        photos: [
        ],
    };

    const fraud_detection = {
        title: 'Credit Card Fraud Detection Model',
        summary: 'Group final project',
        photos: [
        ],
    };

    const nlp_queries = {
        title: 'Natural Language Processing SQL',
        summary: 'Database systems class project using OpenAPI and SQL to query data using natural language as input',
        github: 'https://github.com/brayway05/Natural_Language_AI',
        photos: [
            {
                src: 'query1.png',
                caption: 'Query Example 1',
            },
            {
                src: 'query2.png',
                caption: 'Query Example 2',
            },
        ],
    };

    return (
        <div className="bg-[#192031]">
            <div className="container mx-auto py-2">
                <Profile
                    profilePicture={profilePic}
                    name={'Brayden Christensen'}
                    intro={"I love to learn! In my free time I love to try new sports, games, and music. I snowboard and play the drums. Here are some of my projects!"}
                />
            </div>
            <div className="container mx-auto py-8">
                <DemoComponent
                    title={nlp_queries.title}
                    github={nlp_queries.github}
                    summary={nlp_queries.summary}
                    photos={nlp_queries.photos}
                />
            </div>
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
                    title={fraud_detection.title}
                    summary={fraud_detection.summary}
                    photos={fraud_detection.photos}
                />
            </div>
        </div>
    )
}

export default HomePage;