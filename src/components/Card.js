import React from "react";

import "https://kit.fontawesome.com/413ecd623f.js";

export default function Card(props) {
	return (
		<div className="card">
			<img className="card-img" src={props.item.imageUrl}></img>

			<div className="card-info">
				<div className="card-location">
					<i className="fa-solid fa-location-dot"></i>
					<p>{props.item.location.toUpperCase()}</p>
				</div>

				<p className="card-title">{props.item.title}</p>
				<p className="card-dates">{props.item.startDate} - {props.item.endDate}</p>
				<p className="card-description">{props.item.description}</p>
			</div>
		</div>
	)
}