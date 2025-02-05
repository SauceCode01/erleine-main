import React, { useState } from "react";
// import Carousel from "./Carousel";
// import CategoryCard from "./cards/CategoryCard";

import { defaultBreakpoints } from "../../../config";
import { getCategories } from "../../../API";

import Carousel from "../../carousel/Carousel";

const CategoryCarouselBlock = () => {
	const breakpoints = [
		{
			maxWidth: defaultBreakpoints.bmd,
			capacity: 4,
			jumpSize: 1,
			gap: 20,
		},
	];

	let loadedcategories = getCategories();
	const [categories, setCategories] = useState(loadedcategories);
	console.log("categories", loadedcategories);

	return (
		<>
			<h2 className="text-4xl font-bold">Browse by Categories</h2>
			<br />
			<Carousel breakpoints={breakpoints} centerMode={false} navigation={false}>
				{
          
					// <h1>hello world</h1>
					categories.map((category, index) => 
						(<div className="aspect-square flex flex-col rounded-2xl bg-blue-200 shadow-md hover:shadow-lg shadow-gray-400 overflow-clip items-center justify-center">
							<h1>T shirts</h1>
						</div>)
					)
				}
			</Carousel>
			<br />
			<br />
		</>
	);
};

export default CategoryCarouselBlock;
