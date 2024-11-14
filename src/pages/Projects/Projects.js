import { Link } from "react-router-dom";
import ProjectEntry from "../../components/ProjectEntry/ProjectEntry";
import "./Projects.css"
import { useEffect } from "react";

function Projects() {
    useEffect(() => {
        document.title = "Ivan Pollak - Projects"
    }, [])
    return (
        <div>
            <h1>
                Projects
            </h1>
            <div className="ProjectsListDiv">

                <ProjectEntry
                    title={"ExoDist"}
                    description={
                        <div>
                            <h3>
                                Description
                            </h3>
                            <p>
                                <i> ExoDist </i> is an distortion audio plugin.
                                It uses a soft clipper algorythm i wrote completely on my own.
                                This whole plugin is developed using C++ and the JUCE Framework.
                            </p>
                            <Link to={"https://github.com"} target="blank">
                                link
                            </Link>
                        </div>
                    }/>
                
                <ProjectEntry
                    title={"Web Scraper"}
                    description={
                        <div>
                            <h3>
                                Description
                            </h3>
                            <p>
                                A simple webscraper, that can be automated within the app.
                                Coded using C# and WPF using the Selenium Framework for webscraping.
                            </p>
                            <p>
                                No link since this is a private project.
                            </p>
                        </div>
                    }/>
                
                <ProjectEntry
                    title={"Portfolio Website"}
                    description={
                        <div>
                            <h3>
                                Description
                            </h3>
                            <p>
                                This website you are currently looking at :)
                            </p>
                            <p>
                                Coded using HTML, CSS and JS with the React Framework.
                                Using Github Pages for the deployment.
                            </p>
                            <Link to={"https://github.com"} target="blank">
                                link
                            </Link>
                        </div>
                    }/>
            </div>
        </div>
    )
}

export default Projects;