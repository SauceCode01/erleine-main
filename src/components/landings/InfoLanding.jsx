import React from "react";

import { remToPx, getTailwindProperty } from "../../tools/ElementHooks";
import Carousel from "../carousels/Carousel";

import img1 from "../../assets/img4.png";
import SingleImageCarousel from "../carousels/SingleImageCarousel";


const InfoLanding = ({ className, children }) => {
	const breakpoints = [
		{
			maxWidth: remToPx(getTailwindProperty("--breakpoint-md")),
			capacity: 1,
			jumpSize: 1,
			gap: 0,
		},
	];

	const defaultClassName = "";
	const classNameParameter = defaultClassName + " " + className;

	return (
		<>
			<div className="relative w-full bg-pink-300">
        <div className=" top-0 left-0 w-full">
          
				<Carousel
					breakpoints={breakpoints}
					centerMode={false}
					className={className}
					prevOnFirstWillJumpToLast={true}
          navigation={false}
					itemsClassName={"aspect-4/2"}
				>
				<img src={img1}></img>
				<img src={img1}></img>
				<img src={img1}></img>
				</Carousel>
        </div>
				<div className="absolute top-0 left-0 p-5 pr-[20%] w-full h-full overflow-hidden">
					<h1 className="text-white text-5xl font-bold">Erleine Design and Printing Services</h1>
          <p className="text-white text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci, ratione necessitatibus quia dignissimos illo dolor tenetur ipsum accusantium eos doloribus reiciendis esse voluptatum, vero voluptatibus repellat laudantium placeat aliquid.
          </p>
				</div>
			</div>
		</>
	);
};

export default InfoLanding;
