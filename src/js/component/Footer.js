import React from "react";

// Creating the Footer
// Essentially a navbar with only one item

export const Footer = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container justify-content-center">
				<span className="text-white bg-dark m-2">
					Copyright © Your Website 2021
				</span>
			</div>
		</nav>
	);
};
