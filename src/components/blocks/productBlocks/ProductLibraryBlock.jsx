import React, { createElement, useRef } from "react";

import { useState, useEffect } from "react";

import { getProducts } from "../../../API";
import ProductCard from "../../cards/ProductCard";

const ProductLibraryBlock = ({
	header = { title: "", subtitles: [] },
	isLifted = false,
	productList = [],
	filters = { categories: [], labels: [], excategories: [], exlabels: [] },
	enableLoadMoreCard = false,
}) => {
	const headerTitle = header.title;
	const headerSubtitles = header.subtitles;

	const [displayProductList, setDisplayProductList] = useState(
		productList.length > 0 ? productList : getProducts({quantity:10, filters:filters})
	);

	const loadMore = () => {
    let newproducts = getProducts({quantity:10})
		setDisplayProductList([...displayProductList, ...newproducts]);

	};

	return (
		<>
			<div
				className={
					isLifted
						? "w-full p-5 rounded-2xl bg-white shadow-xl shadow-gray-500"
						: ""
				}
			>
				{/* TITLE PART  */}
				{headerTitle ? (
					<>
						<div className="flex items-center">
							<div className="text-4xl font-bold mr-20">{headerTitle}</div>
							{headerSubtitles.length > 0 ? (
								<div className="flex items-center justify-start">
									{headerSubtitles.map((subtitle, index) => {
										return <div className="text-[1rem] mr-10">{subtitle}</div>;
									})}
								</div>
							) : (
								""
							)}
						</div>

					</>
				) : (
					""
				)}

				{/* PRODUCTS  */}
					<div className="container-xl lg:container m-auto">
						<h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center"></h2>
						<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
							{displayProductList.map((productId, index) => (
								<ProductCard productId={productId}></ProductCard>
							))}
						</div>
					</div>
					
					<br/>

				{/* LOAD MORE  */}
				<div className="w-full h-15 flex items-center justify-center">
					<div
						className="w-25 h-full  flex items-center justify-center rounded-2xl bg-gray-300"
						onClick={loadMore}
					>
						Load More
					</div>
				</div>
				<br></br>
			</div>
		</>
	);
};

export default ProductLibraryBlock;
