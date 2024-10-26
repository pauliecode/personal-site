import "../styles/NavBar.css";
import { Fade } from "react-awesome-reveal";
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const NavBar = ({setSection}) => {
    return (
        <Fade triggerOnce direction="left">
        <div id="navbar">
            <ul>
                <li className="navbar-item">
                    <a href="#home" className="effect-underline effect-shine"
                    onClick={() => {
                        setSection(0);
                    }}
                    >/home</a>
                </li>
                <li className="navbar-item">
                    <a href="#about" className="effect-underline effect-shine"
                    onClick={() => {
                        setSection(1);
                    }}
                    >/about</a>
                </li>
                <li className="navbar-item">
                    <a href="#experience" className="effect-underline effect-shine"
                    onClick={() => {
                        setSection(2);
                    }}
                    >/experience</a>
                </li>
                <li className="navbar-item">
                    <a href="#projects" className="effect-underline effect-shine"
                    onClick={() => {
                        setSection(3);
                    }}
                    >/projects</a>
                </li>
                <li>
                    <div className="socials">
                        <a className="social-icon effect-shine" href="mailto:pau9ale@gmail.com" target="_blank">
                            <MailOutlineRoundedIcon style={{ fontSize: 25 }}></MailOutlineRoundedIcon>
                        </a>
                        <a className="social-icon effect-shine" href="https://github.com/pauliecode" target="_blank">
                            <GitHubIcon style={{ fontSize: 25 }}></GitHubIcon>
                        </a>
                        <a className="social-icon effect-shine" href="https://www.linkedin.com/in/paula-alemany-gotor-3705641b8" target="_blank">
                            <LinkedInIcon style={{ fontSize: 25 }}></LinkedInIcon>
                        </a>
                    </div>
                </li>
            </ul>
        </ div>
        </Fade>
    )
}

export default NavBar;