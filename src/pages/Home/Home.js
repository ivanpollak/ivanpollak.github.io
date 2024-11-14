import { useEffect } from "react";
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
            <p className="homeDesc">
                Portfolio of Ivan Pollak.
            </p>
        </div>
    )
}

export default Home;