import React from "react";

import image from "../assets/img1.png";

const ProductCard = () => {
	return (
		<div className="border-2 border-gray-950 bg-white hover:shadow-md hover:shadow-gray-500 relative aspect-4/5 transition-all duration-250 ease-in-out">
			<img src={image} className="aspect-square"></img>
			<p className="m-2">I AM PRODUCT</p>
			<p className="m-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti,
				magni nam exercitationem qui at, facilis quos dicta laudantium culpa
				doloribus sed eveniet ipsum fugit nulla nemo ad! Delectus, optio?
			</p>
		</div>
	);
};

export default ProductCard;
