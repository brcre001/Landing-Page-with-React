import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";

// Create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container mb-4">
				<Jumbotron />
				<div className="row">
					<Card
						title="Bears"
						imageURL="https://i.picsum.photos/id/1020/4288/2848.jpg?hmac=Jo3ofatg0fee3HGOliAIIkcg4KGXC8UOTO1dm5qIIPc"
						text="This is a photo showing the majestic bears in yosemite"
					/>
					<Card
						title="Vultures"
						imageURL="https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII"
						text="This photo shows a wonderful vulture landing in its nest"
					/>
					<Card
						title="Cliff Diving"
						imageURL="https://i.picsum.photos/id/1050/6000/4000.jpg?hmac=HhCXFcOrIrNguK7GqP6VhICXPa5FmcLZdug505qiEZM"
						text="Great location isolated for premium cliff diving"
					/>
					<Card
						title="Lions"
						imageURL="https://i.picsum.photos/id/1074/5472/3648.jpg?hmac=w-Fbv9bl0KpEUgZugbsiGk3Y2-LGAuiLZOYsRk0zo4A"
						text="A lioness in her natural habitat"
					/>
				</div>
			</div>
		</div>
	);
}
