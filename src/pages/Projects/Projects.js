import React, { useEffect } from "react";
import ProjectEntry from "../../components/ProjectEntry/ProjectEntry";
import "./Projects.css";
import projects from "../../projects";

function Projects() {
  useEffect(() => {
    document.title = "Ivan Pollak - Projects";
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <div className="infoBarProjects">Click on a project to expand it.</div>
      <div className="ProjectsListDiv">
        {projects.map((project, index) => (
          <ProjectEntry
            key={index}
            title={project.title}
            shortDesc={project.shortDesc}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
