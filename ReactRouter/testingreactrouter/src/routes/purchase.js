import { Link } from "react-router-dom";
export default function Purchase(props) {
	return (
		<>
			<p>This is the purchase page</p>
			<Link to="/" onClick={props.handleClick}>
				Back
			</Link>
		</>
	);
}
