import React from "react";

import Carousel from "../../carousel/Carousel";

import { defaultBreakpoints } from "../../../config";

import img1 from "../../../assets/img1.png";

const FeatureBlock = () => {
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
			prevOnFirstWillJumpToLast={true}
		>
			<img src={img1} className=""></img>
			<img src={img1} className=""></img>
			<img src={img1} className=""></img>
		</Carousel>
	);
};

export default FeatureBlock;
