import React, { createElement, useRef } from "react";

import { useState, useEffect } from "react";
import ProductCard from "../carousels/cards/ProductCard";

const ProductsLibrary = () => {
	const containerRef = useRef(null)
	const genproducts = []
	for (let i=0; i<8; i++) {genproducts.push(<ProductCard/>)
	}
	const [products, setProducts] = useState(genproducts)


	const loadMore = () => {
		let newProducts = []
		for (let i=0; i<8; i++) {
			newProducts.push(<ProductCard/>)
		}

		setProducts((prevValue)=> [...prevValue, newProducts])
	}



	return (
		<>
			<div className="flex items-center">
				<div className="text-4xl font-bold mr-20">Category Title</div>
				<div className="text-[1rem] mr-10">sub category</div>
				<div className="text-[1rem] mr-10">another</div>
				<div className="text-[1rem] mr-10">minimalist</div>
			</div>
			<section className=" px-4 py-10">
				<div className="container-xl lg:container m-auto">
					<h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center"></h2>
					<div ref={containerRef} className="grid grid-cols-1 md:grid-cols-5 gap-6">
						{products}
					</div>
				</div>
			</section>

			<div className="w-full h-15 flex items-center justify-center">
				<div className="w-25 h-full  flex items-center justify-center rounded-2xl bg-gray-300" onClick={loadMore}>Load More</div>
			</div>
			<br></br>
		</>
	);
};

export default ProductsLibrary;
