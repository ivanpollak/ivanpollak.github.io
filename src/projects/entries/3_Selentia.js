import { Link } from "react-router-dom";

const Selentia = {
	title: "Selentia",
    shortDesc: (
	<div>
		<p>
			<b>Selentia </b>
			is a simple .wav file player.
		</p>
	</div>
    ),
    description: (
		<div>
			<p>
				This project holds a special place in my journey as a developer.
				It was one of my very first private projects,
				and though simple in its execution,
				it taugth me invaluable lessions about programmin,
				specifically in <b>WPF </b> and <b>C#</b>.
			</p>

			<Link to={"https://github.com/ivanpollak/selentia"} target="blank">
				View on GitHub
			</Link>
		</div>
	)
}

export default Selentia;