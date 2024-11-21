import { Link } from "react-router-dom";
import "./AboutMe.css";
import { useEffect } from "react";

function AboutMe()
{
    useEffect(() => {
        document.title = "Ivan Pollak - About Me"
    }, [])
    return(
        <div>
            <h1>
                About Me
            </h1>
            
            <p>
                Hello! 
                I'm a 19-year-old Software Developer in Training,
                currently in my second year of apprenticeship.
                Before that I had the oppertunity to work as an intern for a year,
                learning general knowledge about hard- and software.
            </p>

            <p>
                Throughout my journey, 
                I've gained a strong foundation in various programming languages and technologies,
                including:

                <ul>
                    <li>
                        <b>Java, </b>
                        <b>C#, </b>
                        <b>Python, </b>
                        <b>C++, </b>
                        <b>HTML5, </b>
                        <b>CSS, </b>
                        <b>JavaScript</b>
                    </li>

                    <li>
                        <b>UML</b> for software design
                    </li>

                    <li>
                        Some experience with 
                        <b> Spring Boot, </b>
                        <b>WPF, </b>
                        and
                        <b> React JS </b>
                        (this site is built using React!)
                    </li>
                </ul> 
            </p>

            <p>
                Right now, I'm working on my most ambitious project yet:
                an audio plugin using Digital Signal Processing with a custom algorithm I developed.
                This project is particularly special to me
                because it combines my love for coding with my passion for music production.
                Through this, I've deepend my knowledge of 
                <b> C++</b>
                ,
                <b> low-level programming</b>, 
                and
                <b> complex algorithm design</b>. 
            </p>

            <p>
                Feel free to explore my projects,
                and don't hesitate to reach out if you'd like to connect!
            </p>


            <div className="contactLinks">
                <Link to={"mailto:ivanpollak@tutanota.com"}>
                Contact Me
                </Link>
            </div>
        </div>
    )
}

export default AboutMe;