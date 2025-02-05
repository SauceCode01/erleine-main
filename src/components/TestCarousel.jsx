import { useEffect, useRef, useState } from "react";

import { Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { NavigationNext, NavigationPrev } from "./NavigationButtons";

const TestCarousel = ({children}) => {

	let swiperRef = useRef(null);
	let nextRef = useRef(null);
	let prevRef = useRef(null);


	return (
		<>
			<Swiper 
				ref={swiperRef}

				modules={[Navigation, Autoplay]}
				slidesPerView={3}
				spaceBetween={10}
				
				autoplay={{delay:3000, disableOnInteraction:true}}

				onInit={(swiper)=> {
					swiper.params.navigation.nextEl = nextRef.current
					swiper.params.navigation.prevEl = prevRef.current
					// swiper.navigation.init();
					// swiper.navigation.update();
				}}

			>
				{children.map((child, index) => {
					return <SwiperSlide>{child}</SwiperSlide>;
				})}

				<NavigationNext passedRef={nextRef}></NavigationNext>
				<NavigationPrev passedRef={prevRef}></NavigationPrev>
			</Swiper>
		</>
	);
};

export default TestCarousel;
