// switch name to Portfolio after website functions
// About = Portfolio
import mvmnt from '../../assets/images/mvmnt.png';
import filmify from '../../assets/images/filmify.png';
import weatherDashboard from '../../assets/images/weather-dashboard.png';
import noteTaker from '../../assets/images/note-taker.png';
import generator from '../../assets/images/password-generator.png';
import codeQuiz from '../../assets/images/code-quiz.png';



export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div>
                <a className='a-mvmnt' href="https://github.com/mslzbry/mvmnt">mvmnt GitHub Repository</a>
                <a className='a-mvmnt' href="https://fast-scrubland-44894-b727f94b7e1a.herokuapp.com/">mvmnt Deployed Site</a>
                <img src={mvmnt} alt='mvmnt'className="mvmnt"/>
            </div>
            <div>
                <img src={filmify} alt='filmify'className="filmify"/>
                <a className='a-filmify' href="https://github.com/eliasjrivera/Filmify">Filmify GitHub Repository</a>
                <a className='a-filmify' href="https://eliasjrivera.github.io/Filmify/">Filmify Deployed Site</a>
            </div>
            <div>
                <img src={weatherDashboard} alt='weatherDashboard'className="weatherDashboard"/>
                <a className='a-weatherDashboard' href="https://github.com/eliasjrivera/Weather-Dashboard">Weather Dashboard GitHub Repository</a>
                <a className='a-weatherDashboard' href="https://eliasjrivera.github.io/Weather-Dashboard/">Weather Dashboard Deployed Site</a>
            </div>
            <div>
                <img src={noteTaker} alt='noteTaker'className="noteTaker"/>
                <a className='a-noteTaker' href="https://github.com/eliasjrivera/Express.js-Note-Taker">Note Taker GitHub Repository</a>
                <a className='a-noteTaker' href="https://thawing-ravine-08596-e7ba324e19b6.herokuapp.com/">Note Taker Deployed Site</a>
            </div>
            <div>
                <img src={generator} alt='generator'className="generator"/>
                <a className='a-generator' href="https://github.com/eliasjrivera/JavaScript-Password-Generator">Password Generator GitHub Repository</a>
                <a className='a-generator' href="https://eliasjrivera.github.io/JavaScript-Password-Generator/">Password Generator Deployed Site</a>
            </div>
            <div>
                <img src={codeQuiz} alt='codeQuiz'className="codeQuiz"/>
                <a className='a-codeQuiz' href="https://github.com/eliasjrivera/Web-APIs-Code-Quiz">Code Quiz GitHub Repository</a>
                <a className='a-codeQuiz' href="https://eliasjrivera.github.io/Web-APIs-Code-Quiz/">Code Quiz Deployed Site</a>
            </div>
        </div>
    );
}