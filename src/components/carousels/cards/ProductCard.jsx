import React from "react";

import img1 from "../../../assets/img3.png";

const ProductCard = ({ productData }) => {
	return (
		<div className="aspect-3/5 flex flex-col  bg-white shadow-md hover:shadow-lg shadow-gray-400 overflow-clip cursor-pointer">
			<div className="w-full aspect-square overflow-clip flex items-center justify-center">

				<img src={img1} className="w-full aspect-square hover:w-[95%] hover:shadow-lg transition-all duration-200"></img>
			</div>
			<div className="p-3 flex flex-col">
				<p className="text-xl font-bold">Product name</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam</p>
				<br></br>
				<button className="cursor-pointer bg-orange-400 hover:bg-orange-500 text-white w-full flex items-center justify-center p-2">
					View on Shopee
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
