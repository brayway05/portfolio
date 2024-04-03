import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import {Chip, IconButton} from "@mui/material"; 

interface ProfileComponentProps {
    profilePicture: string;
    name: string;
    intro: string;
}

const languages = ['Python', 'SQL',  'Git', 'React', 'Angular', 'Java', 'C++'];
const skills = ['Machine Learning', 'Data Analysis', 'Data Visualization', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Statistical Analysis', 'Predictive Modeling'];
const libraries = ['Pandas', 'Numpy', 'Sci-kit learn', 'Matplotlib', 'Plotly', 'PyTorch', 'Statsmodels', 'OpenCV'];
const databases = ['MySQL', 'MongoDB', 'Oracle', 'Snowflake', 'Redis', 'Cassandra', 'Neo4j'];

const Profile: React.FC<ProfileComponentProps> = ({ profilePicture, name, intro }) => {
    const [showSkills, setShowSkills] = useState(false);
    const [showLanguages, setShowLanguages] = useState(false);
    const [showLibraries, setShowLibraries] = useState(false);
    const [showDatabases, setShowDatabases] = useState(false);

    const handleShowSkillsClick = () => {
        setShowSkills(!showSkills);
    };

    const handleShowLanguagesClick = () => {
        setShowLanguages(!showLanguages);
    }

    const handleShowLibrariesClick = () => {
        setShowLibraries(!showLibraries);
    }

    const handleShowDatabasesClick = () => {
        setShowDatabases(!showDatabases);
    }

    return (
        <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:mr-8 mb-4 md:mb-0">
                <img
                    src={profilePicture}
                    alt={`${name} Profile Picture`}
                    className="w-64 h-64 rounded-full object-cover"
                />
            </div>
            <div className="w-2/3 px-10 text-white">
                <h2 className="text-3xl font-bold mb-2 tracking-wide">{name}</h2>
                <h2 className="font-bold">Data Scientist & Full-stack Developer</h2>
                <p className="italic">About me</p>
                <p className="text-gray-400">{intro}</p>
                <div>
                    <IconButton aria-label="add" color="primary" onClick={handleShowSkillsClick}>
                        <AddIcon />
                    </IconButton>
                    <div className="mx-2 inline-block align-middle">Skills</div>
                </div>
                {showSkills && (
                    <div>
                        <ul className="list-none p-0 m-0">
                            {
                                skills.map((skill, index) => (
                                    <Chip key={index} label={skill} className="inline-block mr-4 my-1" color="primary"/>
                                ))
                            }
                        </ul>
                    </div>
                )}
                <div>
                    <IconButton aria-label="add" color="primary" onClick={handleShowLanguagesClick}>
                        <AddIcon />
                    </IconButton>
                    <div className="mx-2 inline-block align-middle">Languages</div>
                </div>
                {showLanguages && (
                    <div>
                        <ul className="list-none p-0 m-0">
                            {
                                languages.map((language, index) => (
                                    <Chip key={index} label={language} className="inline-block mr-4 my-1" color="primary"/>
                                ))
                            }
                        </ul>
                    </div>
                )}
                <div>
                    <IconButton aria-label="add" color="primary" onClick={handleShowLibrariesClick}>
                        <AddIcon />
                    </IconButton>
                    <div className="mx-2 inline-block align-middle">Python Libraries</div>
                </div>
                {showLibraries && (
                    <div>
                        <ul className="list-none p-0 m-0">
                            {
                                libraries.map((library, index) => (
                                    <Chip key={index} label={library} className="inline-block mr-4 my-1" color="primary"/>
                                ))
                            }
                        </ul>
                    </div>
                )}
                <div>
                    <IconButton aria-label="add" color="primary" onClick={handleShowDatabasesClick}>
                        <AddIcon />
                    </IconButton>
                    <div className="mx-2 inline-block align-middle">Databases</div>
                </div>
                {showDatabases && (
                    <div>
                        <ul className="list-none p-0 m-0">
                            {
                                databases.map((database, index) => (
                                    <Chip key={index} label={database} className="inline-block mr-4 my-1" color="primary"/>
                                ))
                            }
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;