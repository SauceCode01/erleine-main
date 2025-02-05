import React from "react";
import { useRef } from "react";

import img1 from "../../../assets/img1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { NavigationNext, NavigationPrev } from "../../buildingBlocks/NavigationButtons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FeatureBlock = () => {
	
		const navigationNextRef = useRef(null)
		const navigationPrevRef = useRef(null)

	return (
		<>
			<Swiper
				modules={[Navigation, Autoplay, Pagination]}
				slidesPerView={1}
				rewind={true}
				pagination={true}
				autoplay={{ delay: 3000 }}
				onInit={(swiper) => {
					swiper.params.navigation.nextEl = navigationNextRef.current;
					swiper.params.navigation.prevEl = navigationPrevRef.current;
					swiper.navigation.init();
					swiper.navigation.update();
				}}
				className="w-full h-full left-0 top-0  bg-blue-200"
			>
				<SwiperSlide>
					<img src={img1} className="w-full h-full" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img1} className="w-full h-full" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img1} className="w-full h-full" />
				</SwiperSlide>

				<NavigationNext passedRef={navigationNextRef}></NavigationNext>
				<NavigationPrev passedRef={navigationPrevRef}></NavigationPrev>
			</Swiper>
		</>
	);
};

export default FeatureBlock;
