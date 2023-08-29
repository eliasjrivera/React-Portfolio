import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <p>
                <ul>
                    <a href="https://github.com/eliasjrivera">
                    <li className="logo">
                        <VscGithubAlt />
                    </li>
                    </a>
                    <a href="https://www.linkedin.com/in/elias-rivera-5bb55025a/">
                    <li className="logo">
                        <AiOutlineLinkedin />
                    </li>
                    </a>
                    <a href="https://stackoverflow.com/users/22462458/elias">
                    <li className="logo">
                        <FaStackOverflow />
                    </li>
                    </a>
                </ul>
            </p>
        </footer>
    );
}