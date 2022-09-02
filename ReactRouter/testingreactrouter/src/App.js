import "./App.css";
import { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Outlet,
} from "react-router-dom";
import Landing from "./routes/landing";
import About from "./routes/about";
import Purchase from "./routes/purchase";
import Contact from "./routes/contact";

export default function App() {
	const [path, setPath] = useState("/");
	useEffect(() => {
		setPath(window.location.pathname);
	}, []);
	const handleClick = ({ target }) => setPath(target.pathname);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const handleChange = ({ target }) => {
		const { value, name } = target;
		if (name === "username") return setUsername(value);
		setPassword(value);
	};
	const [auth, setAuth] = useState(false);
	const authenticate = (e) => {
		e.preventDefault();
		if (username === "admin" && password === "admin") {
			setAuth(true);
		}
		setUsername("");
		setPassword("");
		if (!auth) document.querySelector("[name=username]").focus();
		return;
	};

	return (
		<>
			<h1>Testing react router</h1>
			{/* {!auth && (
				<>
					<h3>Please authenticate</h3>
					<form onSubmit={authenticate}>
						<input
							type="text"
							placeholder="username"
							value={username}
							onChange={handleChange}
							name="username"></input>
						<input
							type="password"
							placeholder="password"
							value={password}
							onChange={handleChange}
							name="password"></input>
						<button type="submit">Submit</button>
					</form>
				</>
			)} */}
			{auth && (
				<>
					{" "}
					<Link to={"about"} onClick={handleClick}>
						About
					</Link>
					<Link to={"purchase"} onClick={handleClick}>
						Purchase
					</Link>
					<Link to={"contact"} onClick={handleClick}>
						Contact
					</Link>
					<Outlet />
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="about" element={<About handleClick={handleClick} />} />
						<Route
							path="purchase"
							element={<Purchase handleClick={handleClick} />}
						/>
						<Route
							path="contact"
							element={<Contact handleClick={handleClick} />}
						/>
					</Routes>
				</>
			)}
		</>
	);
}
