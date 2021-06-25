import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";

// Create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}
