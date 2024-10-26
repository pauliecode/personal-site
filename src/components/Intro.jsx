import "../styles/Intro.css";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";

const Intro = () => {
    return (
        <Fade triggerOnce direction="up" cascade>
        <div id="intro">
            hi, <span className="name">paula</span> here
            <div className="description">
                <span> I like coding. </span>
                <div className="bio">
                    <span>full time&nbsp;</span>
                    <div className="roles">
                        <Typewriter
                        options={{
                            strings: ['developer.', 'cat-lover.', 'film-nerd.', 'aviation enthusiast.'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    )
}

export default Intro;