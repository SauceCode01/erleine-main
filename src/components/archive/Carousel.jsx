import { useEffect, useRef, useState } from "react";

import { Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Carousel = ({ children, className, swiperParameters={} }) => {
	let useOwnNavigation = false;

	let swiperRef = useRef(null);
	let nextRef = useRef(null);
	let prevRef = useRef(null);

	if (navigation) {
		useOwnNavigation = true;
		nextRef.current = navigation.nextNavigation;
		prevRef.current = navigation.prevNavigation;
	}

	useEffect(() => {
		if (!swiperRef.current) return;

		const defaultParameters = {
			modules: [Navigation, Autoplay],
			navigation: {
				nextEl: nextRef.current,
				prevEl: prevRef.current,
			},
			slidesPerView: 3,
			spaceBetween: 10,
			autoplay: {
				delay: 5000,
				disableOnInteraction: true,
			}
		};

		console.log("swiper parameters", swiperParameters)
		const parameters = {...defaultParameters, ...swiperParameters};

		console.log("parameters uwu", parameters)

		const swiper = new SwiperCore(swiperRef.current, parameters);
	}, []);

	return (
		<>
			<Swiper
				ref={swiperRef}
			>
				{children.map((child, index) => {
					return <SwiperSlide>{child}</SwiperSlide>;
				})}
				<button
					ref={nextRef}
					className="h-[20%] rounded-full aspect-square flex items-center justify-center bg-white absolute top-[50%] right-0 translate-y-[-50%] z-[1]"
				>
					next
				</button>

				<button
					ref={prevRef}
					className="h-[20%] rounded-full aspect-square flex items-center justify-center bg-white absolute  top-[50%] left-0 translate-y-[-50%]  z-[1]"
				>
					prev
				</button>
			</Swiper>
		</>
	);
};

export default Carousel;
