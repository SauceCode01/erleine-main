import React, { useRef, useState } from "react";

import ProductCard from "../../buildingBlocks/ProductCard";

import { getProductIds } from "../../../API";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { NavigationNext, NavigationPrev } from "../../buildingBlocks/NavigationButtons";
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
 */
const ProductCarouselBlock = ({
	title = "",
	subtitles = [],
	initialProductIdList = [],
	filters = {
		categories: [],
		labels: [],
		excludeCategories: [],
		excludeLabels: [],
		excludeProductIds: [],
	},
	enableLoadMoreCard = false,
} = {}) => {
	const [productIdList, setProductIdList] = useState(
		initialProductIdList.length > 0
			? initialProductIdList
			: getProductIds({ quantity: 10, filters: filters })
	);

	const loadMoreProducts = () => {
		let newProductIds = getProductIds({
			quantity: 10,
			filters: { ...filters, excludeProductIds: [productIdList] },
		});
		setProductIdList([...productIdList, ...newProductIds]);
	};

	let navigationNextRef = useRef();
	let navigationPrevRef = useRef();

	return (
		<>
			<div className="w-full">
				{title ? (
					<>
						<div className="flex items-center justify-start gap-20 mb-10">
							<div className="text-4xl font-bold">{title}</div>

							{subtitles.length > 0 ? (
								<div className="flex items-center justify-start gap-10">
									{subtitles.map((subtitle, index) => {
										return <div className="text-xl">{subtitle}</div>;
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

				<Swiper
					modules={[Navigation, Autoplay]}
					slidesPerView={3}
					spaceBetween={10}
					autoplay={{ delay: 3000, disableOnInteraction: true }}
					onInit={(swiper) => {
						swiper.params.navigation.nextEl = navigationNextRef.current;
						swiper.params.navigation.prevEl = navigationPrevRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
					onReachEnd={(swiper) => {
						loadMoreProducts();
					}}
					className="w-full"
				>
					{productIdList.map((productId, index) => (
						<SwiperSlide className="overflow-visible pb-5">
							<ProductCard productId={productId}></ProductCard>
						</SwiperSlide>
					))}

					<NavigationNext passedRef={navigationNextRef}></NavigationNext>
					<NavigationPrev passedRef={navigationPrevRef}></NavigationPrev>
				</Swiper>
			</div>
		</>
	);
};

export default ProductCarouselBlock;
