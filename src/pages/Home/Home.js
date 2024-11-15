import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";

function Home()
{
    useEffect(() => {
        document.title = "Ivan Pollak - Homepage"
    }, [])
    return(
        <div>
            <h1>
                Home
            </h1>
            <Typewriter
          options={{
            strings: ["Software Developer", "Coding Enthusiast", "Music Producer", "Problem Solver"],
            autoStart: true,
            loop: true,
          }}
        />
        </div>
    )
}

export default Home;