import "./ProjectEntry.css"

function ProjectEntry({title, description}){
    return(
        <div className="ProjectEntryDiv">
        <h2>
            {title}
        </h2>
        <div>
            {description}
        </div>
    </div>
    )
}

export default ProjectEntry;