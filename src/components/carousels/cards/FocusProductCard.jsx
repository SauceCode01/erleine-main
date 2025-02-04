import React from "react";

import img1 from "../../../assets/img1.png";
import SingleImageCarousel from "../SingleImageCarousel";

const FocusProductCard = () => {
	return (
		<div className="aspect-8/5 flex  bg-white shadow-lg shadow-gray-400 overflow-clip rounded-2xl">
			<div className="w-full left-0 top-0 aspect-square bg-blue-200">
				<SingleImageCarousel className="w-full h-full aspect-square">
					<img src={img1} className="w-full h-full" />
					<img src={img1} className="w-full h-full" />
					<img src={img1} className="w-full h-full" />
				</SingleImageCarousel>
				{/* <img src={img1} className='w-full h-full'/> */}
			</div>

			<div className="p-5 flex flex-col justify-start">
				<div className="flex flex-col justify-start">
					<p className="pt-2 text-5xl font-bold">Product Title</p>
					<br></br>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
						autem reprehenderit iusto! Repudiandae quisquam placeat culpa, rem
						earum eveniet veritatis eaque facilis fugiat non, reprehenderit,
						esse suscipit? Minus, reprehenderit excepturi.
					</p>
				</div>

				<br />
				<br />
				<br />

				<button className="cursor-pointer bg-orange-400 hover:bg-orange-500 text-white w-50 flex items-center justify-center p-2">
					View on Shopee
				</button>
			</div>
		</div>
	);
};

export default FocusProductCard;
