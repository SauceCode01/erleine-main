import React from "react";
import Carousel from "../carousels/Carousel";

import ProductCard from "../carousels/cards/ProductCard";
import { useState } from "react";
import { defaultBreakpoints } from "../../config";

const ProductsYouMayLike = () => {
  const genproducts = []
	for (let i=0; i<9; i++) {genproducts.push(<ProductCard/>)
	}
	const [products, setProducts] = useState(genproducts)

	const breakpoints = [
		{
			maxWidth: defaultBreakpoints.bmd,
			capacity: 5,
			jumpSize: 3,
			gap: 20,
		},
	];

	return (
		<>
    <div className="w-full p-5 rounded-2xl bg-white shadow-xl shadow-gray-500">

    <div className="flex items-center">
				<div className="text-4xl font-bold mr-20">Other products you may like</div>
				<div className="text-[1rem] mr-10">sub category</div>
				<div className="text-[1rem] mr-10">another</div>
				<div className="text-[1rem] mr-10">minimalist</div>
			</div>
      <br></br>


      <Carousel breakpoints={breakpoints}>{products}</Carousel>
			{/* <section className="bg-blue-50 px-4 py-10">
				<div className="container-xl lg:container m-auto">
				</div>
			</section> */}
    </div>

			<br></br>
		</>
	);
};

export default ProductsYouMayLike;
