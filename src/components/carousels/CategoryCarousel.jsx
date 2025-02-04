import React from "react";
import Carousel from "./Carousel";
import CategoryCard from "./cards/CategoryCard";

import { remToPx, getTailwindProperty } from "../../tools/ElementHooks";

const CategoryCarousel = () => {
	const breakpoints = [
		{
			maxWidth: remToPx(getTailwindProperty("--breakpoint-md")),
			capacity: 4,
			jumpSize: 1,
			gap: 20,
		},
	];
	return (
		<>
			<h2 className="text-4xl font-bold">Browse by Categories</h2>
			<br />
			<Carousel breakpoints={breakpoints} centerMode={false}>
				<CategoryCard></CategoryCard>
				<CategoryCard></CategoryCard>
				<CategoryCard></CategoryCard>
				<CategoryCard></CategoryCard>
				<CategoryCard></CategoryCard>
				<CategoryCard></CategoryCard>
				<CategoryCard></CategoryCard>
			</Carousel>
			<br />
			<br />
		</>
	);
};

export default CategoryCarousel;
