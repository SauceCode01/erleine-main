import React from "react";

import Carousel from "./Carousel";

import { defaultBreakpoints } from "../../config";

const SingleImageCarousel = ({ className, itemsClassName, children,  }) => {
	const breakpoints = [
		{
			maxWidth: defaultBreakpoints.bmd,
			capacity: 1,
			jumpSize: 1,
			gap: 0,
		},
	];


	return (
		<Carousel
			breakpoints={breakpoints}
			centerMode={false}
			className={className}
			itemsClassName={itemsClassName}
			prevOnFirstWillJumpToLast={true}
		>
			{children}
		</Carousel>
	);
};

export default SingleImageCarousel;
