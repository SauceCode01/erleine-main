import React from "react";

import { useState } from "react";

import { getProductIds } from "../../../API";
import ProductCard from "../../buildingBlocks/ProductCard";

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
		productList.length > 0
			? productList
			: getProductIds({ quantity: 10, filters: filters })
	);

	const loadMore = () => {
		let newproducts = getProductIds({ quantity: 10 });
		setDisplayProductList([...displayProductList, ...newproducts]);
	};

	return (
		<>
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

			<div className=" w-full grid grid-cols-1 md:grid-cols-5 gap-6">
				{displayProductList.map((productId, index) => (
					<ProductCard productId={productId}></ProductCard>
				))}
			</div>

			{/* LOAD MORE  */}
			<button
				className="m-auto mt-10 mb-10 w-25 h-10  flex items-center justify-center rounded-2xl bg-gray-300 cursor-pointer"
				onClick={loadMore}
			>
				Load More
			</button>
		</>
	);
};

export default ProductLibraryBlock;
