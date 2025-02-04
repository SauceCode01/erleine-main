import React from "react";

import Carousel from "./Carousel";
import ProductCard from "./cards/ProductCard";

import { remToPx, getTailwindProperty } from "../../tools/ElementHooks";

const ProductCarousel = () => {
	const breakpoints = [
		{
			maxWidth: remToPx(getTailwindProperty("--breakpoint-md")),
			capacity: 5,
			jumpSize: 3,
			gap: 20,
		},
	];

	const products = [];
	for (let i = 0; i < 16; i++) {
		products.push(<ProductCard productData={`index: ${i}`}></ProductCard>);
	}

	return (
		<>
			<div className="flex items-center">
				<div className="text-4xl font-bold mr-20">Category Title</div>
				<div className="text-[1rem] mr-10">sub category</div>
				<div className="text-[1rem] mr-10">another</div>
				<div className="text-[1rem] mr-10">minimalist</div>
			</div>
			<br />
			<Carousel breakpoints={breakpoints}>{products}</Carousel>
			<br />
			<br />
		</>
	);
};

export default ProductCarousel;
