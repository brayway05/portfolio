import React from "react";

interface ProfileComponentProps {
    profilePicture: string;
    name: string;
    intro: string;
}

const Profile: React.FC<ProfileComponentProps> = ({ profilePicture, name, intro }) => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:mr-8 mb-4 md:mb-0">
                <img
                    src={profilePicture}
                    alt={`${name} Profile Picture`}
                    className="w-60 h-60 rounded-full object-cover"
                />
            </div>
            <div className="w-2/3 px-10 text-white">
                <h2 className="text-3xl font-bold mb-2 tracking-wide">{name}</h2>
                <h2 className="font-bold">Data Scientist</h2>
                <p className="italic">About me</p>
                <p className="text-gray-400">{intro}</p>
            </div>
            {/* TODO add a skills section with a dropdown? */}
        </div>
    );
};

export default Profile;