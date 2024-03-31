import DemoComponent from "./demo.tsx";
import Profile from "./profile.tsx";
import profilePic from "../assets/profile_pic.jpeg";

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
        title: 'Category Pricing Tool @ Pattern',
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

    const fraud_detection = {
        title: 'Credit Card Fraud Detection Model',
        summary: 'Machine Learning final project',
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
        <div className="bg-[#192031]">
            <div className="container mx-auto py-2">
                <Profile
                    profilePicture={profilePic}
                    name={'Brayden Christensen'}
                    intro={"I love to learn! In my free time I love to try new sports, games, and music. I snowboard and play the drums. " +
                        "My most experienced programming languages are Python, JavaScript, Java, and C++. " +
                        "My most experienced Python libraries include Pandas, Sklearn, Matplotlib, Plotly, PyTorch, and Statmodels. " +
                        "My past and current part-time jobs have give me lots of experience in statistical and machine learning modeling, big data analysis, and full stack development. " +
                        "Here "}
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