import React, { useEffect, useRef } from "react";

import { defaultBreakpoints } from "../config";

import img1 from "../assets/img1.png";

import Carousel from "../components/carousels/Carousel";
import CategoryCarousel from "../components/carousels/CategoryCarousel";
import ProductCarousel from "../components/carousels/ProductCarousel";
import FocusProductCard from "../components/carousels/cards/FocusProductCard";
import InfoLanding from "../components/landings/InfoLanding";
import SingleImageCarousel from "../components/carousels/SingleImageCarousel";
import SocialPagesLanding from "../components/landings/SocialPagesLanding";
import MaxWidthContainer from "../components/MaxWidthContainer";

// have a list of all breakpoints that all component should react to (use context i guess...)

const HomePage = () => {
	const breakpoints = [
		{
			maxWidth: defaultBreakpoints.bmd,
			capacity: 1,
			jumpSize: 1,
			gap: 0,
		},
	];

	return (
		<>
			<section className="w-full p-2 md:p-6 m-auto bg-white shadow-2xl shadow-gray-300 ">
				<SingleImageCarousel
					itemsClassName="w-full aspect-4/2"
					className=" rounded-2xl overflow-clip"
				>
					<img src={img1} className=""></img>
					<img src={img1} className=""></img>
					<img src={img1} className=""></img>
				</SingleImageCarousel>

				<br />
				<br />

				<CategoryCarousel></CategoryCarousel>
			</section>

			<section className="w-full p-2 md:p-6 m-auto ">
				<ProductCarousel></ProductCarousel>

				<ProductCarousel></ProductCarousel>
				<br />
				<br />

				<FocusProductCard></FocusProductCard>
				<br />
				<br />
			</section>

				<MaxWidthContainer>
					<InfoLanding></InfoLanding>
				</MaxWidthContainer>

			<SocialPagesLanding></SocialPagesLanding>
		</>
	);
};

export default HomePage;






{/* <section className="w-full m-auto  bg-white shadow-2xl shadow-gray-300 ">
<InfoLanding></InfoLanding>
</section> */}