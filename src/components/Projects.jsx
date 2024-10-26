import "../styles/Projects.css";
import { Fade } from "react-awesome-reveal";
import { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
import GitHubIcon from '@mui/icons-material/GitHub';
import simhelper from '../assets/simhelper.png'
import exhibit from '../assets/exhibit.png'
import expenses from '../assets/expenses.png'

const Projects = () => {

    const projectList = {
        "Simhelper": {
            description: "Website designed to help people join the amazing but complex hobby of flight simulation.",
            tech: "TypeScript, Vue.Js, Nuxt, Tailwind",
            github: "https://github.com/pauliecode/simhelper",
            img: simhelper
        },
        "Client website": {
            description: "Website made for an entrance test, following the provided specifications and requirements.",
            tech: "JavaScript, Vue.js, Nuxt, Tailwind",
            github: "https://github.com/pauliecode/frontend-dev-exhibit",
            img: exhibit
        },
        "Expenses Tracker": {
            description: "App to track incomes and expenses",
            tech: "JavaScript, Vue.js, Nuxt",
            github: "https://github.com/pauliecode/paulies-chat",
            img: expenses
        },
        "Paulies Chat": {
            description: "",
            tech: "Typescript, Javascript, FeathersJs",
            github: "https://github.com/pauliecode/paulies-chat",
            //img:
        },
    }

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    
    return (
        <div id="projects">
            <Fade triggerOnce duration={2000}>
                <div className="section-header">
                    <h1>/projects</h1>
                </div>
            </Fade>
            <div className="carousel-container"></div>
            <Fade direction="right">
                <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                    {Object.keys(projectList).map((key, i) => (
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={projectList[key].img}
                            alt= {i + " slide"}
                            />
                            <Carousel.Caption>
                                <h3 className="project-name">{key}</h3>
                                <div className="project-caption">
                                    <p className="project-desc">{projectList[key].description}</p>
                                    <p className="tech">{projectList[key].tech}</p>
                                    <a className="project-icon effect-shine" href={projectList[key].github} target="_blank">
                                        <GitHubIcon style={{ fontSize: 25 }}></GitHubIcon>
                                    </a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Fade>
        </div>
    )
}

export default Projects;