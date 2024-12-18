/**
 * Flicklog: A Film Logger Application
 *
 * This project showcases our knowledge in object-based programming, ReactJS, and connecting frontend to backend using REST APIs.
 */

import { Link } from "react-router-dom";

const flicklog = {
  /**
   * Title of the application
   */
  title: "Flicklog",
  
  /**
   * Short description of the application
   */
  shortDesc: (
    <div>
        <p>
            Flicklog is a film logger that allows users to track their watched and wanted movies.
        </p>
    </div>
  ),
  
  /**
   * Detailed description of the application, including links to frontend and backend repositories on GitHub
   */
  description: (
    <div>
        <p>
            This project demonstrates our understanding of object-based programming in JavaScript. 
            It also showcases how to connect a ReactJS frontend with a Spring Boot backend using REST APIs.
        </p>
        
        <Link to={"https://github.com/arcathrax/flicklogfrontend"} target="blank">
            Frontend on GitHub
        </Link>
        <br/>
        <Link to={"https://github.com/arcathrax/flicklogbackend"} target="blank">
            Backend on GitHub
        </Link>
    </div>
  ),
};

export default flicklog;