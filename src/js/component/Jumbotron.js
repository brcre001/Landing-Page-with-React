import React from "react";

// Creating the Jumbotron

export const Jumbotron = () => {
	return (
		<div className="jumbotron mt-4">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industrys standard dummy text
				ever since the 1500s, when an unknown printer took a galley of
				type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to Action!
			</a>
		</div>
	);
};
