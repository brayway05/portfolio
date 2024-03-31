import githubLogo from "../assets/github-mark/github-mark-white.svg";
import hfLogo from "../assets/hf-logo-pirate.svg";
import linkedinLogo from "../assets/white_linkedin.png"
import facebookLogo from "../assets/Facebook_Logo_Secondary.png"

const Navbar = () => {
    return (
        <nav className="bg-gray-800 py-4 sticky top-0">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-white font-bold text-xl">My Portfolio Website</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="https://github.com/brayway05" className="flex text-gray-300 hover:text-white">
                            <img src={githubLogo} alt="Github logo" className="h-8 mr-2"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://huggingface.co/Braywayc" className="text-gray-300 hover:text-white">
                            <img src={hfLogo} alt="HuggingFace logo" className="h-8 mr-2"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/brayden-christensen-185780246/"
                           className="text-gray-300 hover:text-white">
                            <img src={linkedinLogo} alt="Linkedin Logo" className="h-8 mr-2"/>
                        </a>
                    </li>
                    <li>
                        <a href=" https://www.facebook.com/profile.php?id=100010743316440"
                           className="text-gray-300 hover:text-white">
                            <img src={facebookLogo} alt="Facebook Logo" className="h-8 mr-2"/>
                        </a>

                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;