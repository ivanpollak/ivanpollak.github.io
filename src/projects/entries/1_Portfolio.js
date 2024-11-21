import { Link } from "react-router-dom";

const PersonalPortfolioWebsite = {
    title: "Personal Portfolio Website",
    shortDesc: (
        <div>
        <p>
            A portfolio website showcasing my skills in HTML, CSS, JavaScript, and React
        </p>
    </div>
    ),
    description: (
        <div>
        <p>
            This portfolio website is both a project showcase
            and a practical learning experience.
            It was created to demonstrate the skills i've gained
            during my apprenticeship,
            including HTML, CSS, JavaScript,
            and my growing expertise in the React Framework.
            The website you're currently looking at
            is the result of this project.
            It serves as an interactive resume,
            featuring my past projects, skills and experiences.
        </p>
        <Link to={"https://github.com/ivanpollak/ivanpollak.github.io/tree/master"} target={"_blank"}>
            View on GitHub
        </Link>
    </div>
    )
}

export default PersonalPortfolioWebsite;