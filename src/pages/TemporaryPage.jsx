import React, { useEffect, useRef } from "react";

import img1 from "../assets/img1.png";
import TestCarousel from "../components/TestCarousel";
import ProductCard from "../components/cards/ProductCard";

const TemporaryPage = () => {
	return (
		<>
		<h1>temporary page</h1>
		<TestCarousel>

			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>
			<ProductCard></ProductCard>

		</TestCarousel>
		</>
	);
};

export default TemporaryPage;
