import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<i className="fa-solid fa-jedi" style={{ color: "#51291f" }}></i>
			{/* <Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link> */}
			
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
