import React, { useState } from "react";

import Carousel from "../../carousel/Carousel";
import ProductCard from "../../cards/ProductCard";

import { defaultBreakpoints } from "../../../config";
import { getProducts } from "../../../API";
import LoadMoreCard from "../../cards/LoadMoreCard";


import { Swiper } from "swiper/react";
import { NavigationNext, NavigationPrev } from "../../NavigationButtons";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

/**
 * displays a number of products in a carousel
 *
 * {object} header what to put in the header. No header will be displayed if empty
 * {boolean} isLifted true->make the carousel look lifted. false->don't
 * {Array} productList initial product list. product loader (will use filter) will automatically be called if empty. contains the id's of the products
 * {object} filters used by product loader to filter products to load. if empty, any product will be loaded.
 * {boolean} enableLoadMoreCard true->adds a load more button at the end. uses the filters to load more product
 * @returns null
 */
const ProductCarouselBlock = ({
	header = { title: "", subtitles: [] },
	isLifted = false,
	productList = [],
	filters = { categories: [], labels: [], excategories: [], exlabels: [] },
	enableLoadMoreCard = false,
}) => {
	const breakpoints = [
		{
			maxWidth: defaultBreakpoints.bmd,
			capacity: 5,
			jumpSize: 3,
			gap: 20,
		},
	];

	const headerTitle = header.title;
	const headerSubtitles = header.subtitles;

	const [displayProductList, setDisplayProductList] = useState(
		productList.length > 0
			? productList
			: getProducts({ quantity: 10, filters: filters })
	);
	const loadMore = () => {
		let newproducts = getProducts({
			quantity: 10,
			filters: filters,
			loadedProducts: displayProductList,
		});
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

						<br />
					</>
				) : (
					""
				)}

				<Carousel breakpoints={breakpoints} autoplayStopOnInteraction={true}>
					{displayProductList.map((productId, index) => (
						<ProductCard productId={productId}></ProductCard>
					))}

					{enableLoadMoreCard ? (
						<div
							className="w-full h-full flex-col  bg-gray-300 shadow-md hover:shadow-lg shadow-gray-400 overflow-clip cursor-pointer transition-all duration-200 flex items-center justify-center"
							onClick={loadMore}
						>
							See More...
						</div>
					) : (
						""
					)}
				</Carousel>
			</div>
		</>
	);
};

export default ProductCarouselBlock;
