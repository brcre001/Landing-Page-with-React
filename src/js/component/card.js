import React from "react";
import PropType from "prop-types";

// Creating bootstrap card

export const Card = props => {
	return (
		<div className="col-md-3 col-12 text-center">
			<div className="card" style={{ minWidth: "16rem" }}>
				<img
					src={props.imageURL}
					className="card-img-top"
					alt="Image Placeholder"
				/>
				<div className="card-body m-0">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.text}</p>
					<div className="card-footer">
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropType.string,
	imageURL: PropType.string,
	text: PropType.string
};
