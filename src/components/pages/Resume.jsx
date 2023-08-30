// switch name to Resume after website functions
// Contact = Resume
import { FaFileDownload } from "react-icons/fa";

export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <a href="https://drive.google.com/file/d/1xC7aFdAeRdSQmS6LL4moPETzLxDMBHzw/view?usp=drive_link">
                <li className="logo">
                    <FaFileDownload />
                </li>
            </a>
            <h3>Front-End Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-End Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    );
}