import DemoComponent from "./demo.tsx";
import Profile from "./profile.tsx";
import profilePic from "../assets/profile_pic.jpeg";
import query1 from "../assets/project_images/nlp_queries/query1.png";
import query2 from "../assets/project_images/nlp_queries/query2.png";
import pricing_1 from "../assets/project_images/cat_pricing/pricing_1.png";
import pricing_2 from "../assets/project_images/cat_pricing/pricing_2.png";

const HomePage = () => {

    const deep_learning_data = {
        title: 'Deep Learning Final Project',
        summary: 'Language/Speech recognition model built off of pre-trained audio detection model...Results coming soon!',
        photos: [
        ],
    }

    const category_pricing = {
        title: 'Category Pricing Tool @ Pattern',
        summary: 'Data warehouse analysis on US Amazon category price trends. Streamlit app to automate data query, run category pricing algorithm and download data for marketing team analysis and visualization. Ask me about how the algorithm works and what kind of data I used!',
        photos: [
            {
                src: pricing_1,
                caption: 'Streamlit App Dashboard',
            },
            {
                src: pricing_2,
                caption: 'Graph of Category Price Over Time',
            }
        ],
    };

    const fraud_detection = {
        title: 'Credit Card Fraud Detection Model',
        summary: 'Machine Learning group final project... Results coming soon!',
        github: 'https://github.com/brayway05/fraud-detection',
        photos: [
        ],
    };

    const nlp_queries = {
        title: 'Natural Language Processing SQL',
        summary: 'Database systems class project using OpenAPI and SQL to query data using natural language as input',
        github: 'https://github.com/brayway05/Natural_Language_AI',
        photos: [
            {
                src: query1,
                caption: 'Query Example 1',
            },
            {
                src: query2,
                caption: 'Query Example 2',
            },
        ],
    };

    return (
        // TODO create a projects tab and an experience tab where the user can switch between the two but stay on the main homepage
        // TODO with the projects tab create experience tags that associate the project with either a job, or interested topic like Deep Learning or Computer Vision
        // TODO add a download resume button
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
                    github={fraud_detection.github}
                    summary={fraud_detection.summary}
                    photos={fraud_detection.photos}
                />
            </div>
        </div>
    )
}

export default HomePage;