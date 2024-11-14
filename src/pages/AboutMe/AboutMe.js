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
                Hey, I'm Ivan Joël Pollak, 
                also known as arcathrax in the music world. 
                I'm currently an apprentice software developer (Informatiker Applikationsentwicklung EFZ)
                with about two and a half years of experience in building diverse projects. 
                My journey into software development started with an internship, and since then, 
                I’ve been hooked on solving complex problems and
                turning ideas into real-world applications.
            </p>

            <p>
                I’m proficient in C++, Java, Python, and NodeJS with React,
                and I’m always eager to expand my skill set. 
                Lately, I’ve been diving into the JUCE framework and
                exploring REST APIs with Spring Boot,
                as I’m fascinated by the intersection of software development 
                and audio technology.
            </p>

            <p>
                On my projects page, 
                you'll find a variety of creations, 
                but the ones I’m most proud of are "ExoDist" and my WebScraper.
                "ExoDist" is special because it combines 
                my passion for both software development and music production,
                while the WebScraper project showcases my interest in data and automation.
            </p>

            <p>
                Outside of coding, 
                I’m a dedicated music producer, sound designer, and DJ.
                I’ve had the honor of gaining over a million streams with my work,
                and I love sharing what I’ve learned through tutorials. 
                When I’m not immersed in tech or music,
                you’ll likely find me hiking or socializing with friends.
            </p>

            <p>
                My goal is to merge my skills as a developer
                with my love for audio to become an audio software developer. 
                I dream of spending at least a year 
                living solely off my music and
                hope to inspire others along the way with my journey.
            </p>

            <p>
            If you’re interested in collaborating on a project, 
            chatting about audio tech, or just want to connect, feel free to reach out!
            </p>

            <div className="contactLinks">
                <Link to={"mailto:ivanpollak@tutanota.com"}>
                    Personal Contact
                </Link>

                <p>
                    OR
                </p>

                <Link to={"mailto:arcathrax@proton.me"}>
                    Music Inquiries
                </Link>
            </div>
        </div>
    )
}

export default AboutMe;