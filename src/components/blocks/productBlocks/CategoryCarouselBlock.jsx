import React, { useState } from "react";
import { useRef } from "react";
import { getCategories } from "../../../API";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { NavigationNext, NavigationPrev } from "../../buildingBlocks/NavigationButtons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CategoryCarouselBlock = () => {
	const navigationNextRef = useRef(null);
	const navigationPrevRef = useRef(null);

	const [categories, setCategories] = useState(getCategories({ quantity: 10 }));

	return (
		<>
			<h2 className="text-4xl font-bold">Browse by Categories</h2>
			<br />
			<Swiper
				modules={[Navigation]}
				slidesPerView={4}
				spaceBetween={20}
				centeredSlides={true}
				centeredSlidesBounds={true}
				onInit={(swiper) => {
					swiper.params.navigation.nextEl = navigationNextRef.current;
					swiper.params.navigation.prevEl = navigationPrevRef.current;
					swiper.navigation.init();
					swiper.navigation.update();
				}}
				className="w-full h-full left-0 top-0  "
			>
				{categories.map((category, index) => (
					<SwiperSlide>
						<div className="aspect-square flex flex-col rounded-2xl bg-blue-200 shadow-md hover:shadow-lg shadow-gray-400 overflow-clip items-center justify-center">
							<h1>{category}</h1>
						</div>
					</SwiperSlide>
				))}

				<NavigationNext passedRef={navigationNextRef}></NavigationNext>
				<NavigationPrev passedRef={navigationPrevRef}></NavigationPrev>
			</Swiper>
			<br />
			<br />
		</>
	);
};

export default CategoryCarouselBlock;
