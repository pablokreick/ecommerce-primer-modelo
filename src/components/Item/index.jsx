import React from "react";
import "./item.css";

const Item = ({ info }) => {
	return (
		<a href="" className="film">
			<img src={info.image} alt="" />
			<p>{info.title}</p>
		</a>
	);
};

export default Item;
