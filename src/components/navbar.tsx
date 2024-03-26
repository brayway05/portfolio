// import githubLogo from "../assets/github-mark/github-mark-white.svg";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-white font-bold text-xl">My Portfolio Website</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="https://github.com/brayway05" className="text-gray-300 hover:text-white">
                            Github
                        </a>
                        {/*TODO might not need github logo*/}
                        {/*<img src={githubLogo} alt="Github logo" className="h-8 mr-2"/>*/}
                    </li>
                    <li>
                        <a href="https://huggingface.co/Braywayc" className="text-gray-300 hover:text-white">
                            Hugging Face
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/brayden-christensen-185780246/" className="text-gray-300 hover:text-white">
                            Linkedin
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/brayway05/Project-Links/tree/main" className="text-gray-300 hover:text-white">
                            Github Project Descriptions
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Link 5
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;