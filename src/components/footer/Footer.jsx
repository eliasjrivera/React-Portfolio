import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

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
                </ul>
            </p>
        </footer>
    );
}