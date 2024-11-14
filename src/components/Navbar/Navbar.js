import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar()
{
    return(
        <div className="mainNavbarDiv">
            {/* Title */}
            <Link to="/">
                <h1>
                    Ivan Pollak
                </h1>
            </Link>

            {/* Links */}
            <div className="linksNavbarDiv">
                <Link className="navbarLink" to="/">
                    Home
                </Link>

                <Link className="navbarLink" to="projects">
                    Projects
                </Link>

                <Link className="navbarLink" to="/about-me">
                    About Me
                </Link>
            </div>
        </div>
    )
}

export default Navbar;