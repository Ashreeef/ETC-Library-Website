import "./Footer.css";

// importing main pictures of the footer
import Computer from "assets/computer.svg";
import Math from "assets/math.svg";
import Logo from "assets/ETC Logo.webp";

// importing the icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileLines, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faInstagram,
    faLinkedin,
    faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

// importing the wave background
import Wave from "utils/Wave";
import Contribution from "./Contribution";

const Footer = () => {
    return (
        <footer id={"contribute"} className="w-full font-sans text-light-text">
            <div className={"rotate-180"}>
                <Wave />
            </div>
            <div className="w-full bg-dark-bg flex flex-col justify-center text-center items-center py-2 ">
                <h1 className="text-3xl lg:text-4xl text-light-text tracking-widest font-semibold">
                    Contribute
                </h1>
                <div className="w-full font-medium my-6 lg:px-[5%] flex flex-col lg:flex-row items-center lg:items-start justify-evenly lg:justify-around">
                    <Contribution
                        illustration={Computer}
                        buttonIcon={faGithub}
                        buttonText={"Contribute on Github"}
                    />

                    <div className="my-10 flex-grow text-center lg:mt-24">
                        <h1 className="flex text-light-text text-2xl justify-center tracking-widest">
                            Made with
                            <FontAwesomeIcon
                                className="text-secondary mx-2 text-3xl"
                                icon={faHeart}
                            />{" "}
                            by
                        </h1>
                        <img
                            width={240}
                            height={240}
                            src={Logo}
                            alt="ETC logo"
                            className="w-40 lg:w-48 m-auto"
                        />
                        <div className="flex justify-center">
                            <a
                                className="social-icon"
                                href="https://web.facebook.com/ensia.tech.community/"
                            >
                                <FontAwesomeIcon icon={faSquareFacebook} />
                            </a>
                            <a className="social-icon" href="https://www.instagram.com/etc_.club/">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a
                                className="social-icon"
                                href="https://www.linkedin.com/company/ensia-tech-community/?originalSubdomain=dz"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a className="social-icon" href="mailto:tech-community@ensia.edu.dz">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </div>

                    <Contribution
                        illustration={Math}
                        buttonIcon={faFileLines}
                        buttonText={"Submit a Document"}
                    />
                </div>
                <div className="font-light">
                    <p className="text-grey-text">All Rights Reserved 2022</p>
                    <a href="https://www.gnu.org/licenses/gpl-3.0.txt">
                        <p className="text-grey-text">License Information</p>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
