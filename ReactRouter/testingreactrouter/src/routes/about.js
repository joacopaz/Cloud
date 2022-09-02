import { Link } from "react-router-dom";
export default function About(props) {
	return (
		<>
			<p>This is the about page</p>
			<Link to="/" onClick={props.handleClick}>Back</Link>
		</>
	);
}
