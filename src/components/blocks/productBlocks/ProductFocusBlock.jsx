import React, { useRef } from "react";
import { useState } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { NavigationNext, NavigationPrev } from "../../buildingBlocks/NavigationButtons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { loadProductData } from "../../../API";

const ProductFocusBlock = ({ productId = 1 }) => {
	const [productData, setProductData] = useState(loadProductData(productId));

	const name = productData.name;
	const categories = productData.categories;
	const labels = productData.labels;
	const variants = productData.variants;
	const description = productData.description;
	const links = productData.links;
	const images = productData.images;

	const navigationNextRef = useRef(null)
	const navigationPrevRef = useRef(null)

	return (
		<div className="flex  bg-white shadow-lg shadow-gray-400 overflow-clip rounded-2xl">
			{/* product image  */}
			
			<Swiper
					modules={[Navigation, Autoplay, Pagination]}
					slidesPerView={1}
					rewind={true}
					pagination={true}
					autoplay={{ delay: 3000, disableOnInteraction: true }}
					onInit={(swiper) => {
						swiper.params.navigation.nextEl = navigationNextRef.current;
						swiper.params.navigation.prevEl = navigationPrevRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
					className="w-full h-full left-0 top-0  bg-blue-200"
				>
					{images
						? images.map((image, index) => (
								<SwiperSlide>
									<img src={image} className="w-full h-full" />
								</SwiperSlide>
						  ))
						: ""}

					<NavigationNext passedRef={navigationNextRef}></NavigationNext>
					<NavigationPrev passedRef={navigationPrevRef}></NavigationPrev>
				</Swiper>

			{/* right side. product details  */}
			<div className="p-5 flex flex-col justify-start">
				<div className="flex flex-col justify-start">
					<p className="pt-2 text-5xl font-bold">
						{name} {productId}
					</p>
					{categories ? (
						<ul className="flex justify-start items-center gap-2 mt-1 mb-1">
							{categories.map((category, index) => (
								<li className=" bg-gray-200 p-1 rounded-xl">{category}</li>
							))}
						</ul>
					) : (
						""
					)}
					{labels ? (
						<ul className="flex justify-start items-center gap-2 mt-1 mb-1">
							{labels.map((label, index) => (
								<li className=" bg-gray-200 p-1 rounded-xl">{label}</li>
							))}
						</ul>
					) : (
						""
					)}

					<br></br>

					<p>{description}</p>

					<br></br>

					{variants ? (
						<ul className="gap-2 mt-1 mb-1">
							{Object.keys(variants).map((variant, index) => (
								<>
									<li className="font-bold p-1">{variant}</li>

									<ul className="flex justify-start items-center gap-2 mt-1 mb-1">
										{variants[variant].map((value, index) => (
											<li className=" bg-gray-200 p-1 min-w-[2rem] justify-center items-center flex">
												{value}
											</li>
										))}
									</ul>
								</>
							))}
						</ul>
					) : (
						""
					)}

					<br />

					<div className="flex flex-col gap-2">
						{links
							? Object.keys(links).map((linkKey, index) => (
									<a
										href={links[linkKey]}
										target="_blank"
										className="cursor-pointer bg-orange-400 hover:bg-orange-500 text-white w-50 flex items-center justify-center p-2"
									>
										{" "}
										View on {linkKey}
									</a>
							  ))
							: ""}
					</div>
				</div>

				<br />
				<br />
				<br />
			</div>
		</div>
	);
};

export default ProductFocusBlock;
