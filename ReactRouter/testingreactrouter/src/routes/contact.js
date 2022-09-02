import { Link } from "react-router-dom";
export default function Contact(props) {
	return (
		<>
			<p>This is the contact page</p>
			<Link to="/" onClick={props.handleClick}>
				Back
			</Link>
		</>
	);
}
