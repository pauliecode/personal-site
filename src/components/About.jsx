import "../styles/About.css";
import { Fade } from "react-awesome-reveal";

const About = () => {
    return (
            <div id="about">
                <Fade triggerOnce duration={2000}>
                    <div className="section-header">
                        <h1>/about</h1>
                    </div>
                    </Fade>
                    <Fade direction="right">
                    <div className="about-container">
                        <div className="about-text">
                            <Fade direction="up" delay={300}>
                                <p>I am a big film-nerd who loves her cat, and I am completely obsessed with the musical
                                    Hamilton. Most
                                    likely I'm playing video games, listening to music, watching movies or sleeping.</p>
                                <p>If I'm not a home there's a high chance that I'm at the local geek shop buying cards,
                                    comics, or
                                    other things I shouldn't spend so much money on. </p>
                                <p>
                                </p>
                            </Fade>
                        </div>
                        <img className="about-image" src=""></img>
                    </div>
                    </Fade>
            </div>
    )
}

export default About;