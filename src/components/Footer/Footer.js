import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer()
{
    return(
        <div className="footerDiv">
            <Link className="footerLink" to={"https://github.com/ivanpollak"} target="blank">
                <img className="footerIcon" src={require("./Icons/github.png")} />
            </Link>

            <Link className="footerLink" to={"https://soundcloud.com/arcathrax"} target="blank">
                <img className="footerIcon" src={require("./Icons/soundcloud.png")} />
            </Link>

            <Link className="footerLink" to={"https://open.spotify.com/intl-de/artist/0XnWXq7lfhJqrmwtmxUkcm?si=zRwCXlWUSMaLPHLRerTQog"} target="blank">
            <img className="footerIcon" src={require("./Icons/spotify.png")} />
            </Link>

            <Link className="footerLink" to={"https://www.youtube.com/@arcathrax"} target="blank">
                <img className="footerIcon" src={require("./Icons/youtube.png")} />
            </Link>

            <Link className="footerLink" to={"https://arcathrax.gumroad.com/"} target="blank">
                <img className="footerIcon" src={require("./Icons/gumroad_.png")} />
            </Link>
        </div>
    )
}

export default Footer;