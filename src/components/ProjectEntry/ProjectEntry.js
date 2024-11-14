import React, { useState } from "react";
import "./ProjectEntry.css";

function ProjectEntry({ title, description, shortDesc }) {
    // Zustand für das Umschalten der Beschreibung
    const [showDescription, setShowDescription] = useState(false);

    // Funktion zum Umschalten
    const showFullDescription = (event) => {
        event.stopPropagation(); // Verhindert das Event-Bubbling
        setShowDescription(true);

    };

    const hideFullDescription = (event) => {
        event.stopPropagation(); // Verhindert das Event-Bubbling
        setShowDescription(false);
    };

    return (
        <div className="ProjectEntryDiv" onClick={showFullDescription} style={showDescription ? { cursor: "auto" } : { cursor: "pointer" }}
>
            <h2>{title}</h2>
            <div>
                {shortDesc}
                {showDescription && (
                    <p className="description">{description}</p>
                )}
            </div>
            {showDescription && (
                <div className="hideButton" onClick={hideFullDescription}>
                    Hide description
                </div>
            )}
        </div>
    );
}

export default ProjectEntry;
