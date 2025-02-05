import React from "react";

import img1 from "../../../assets/img1.png";

import Carousel from "../../carousel/Carousel";

import { defaultBreakpoints } from "../../../config";

import { loadProduct } from "../../../API";

const ProductFocusBlock = ({ productId }) => {
	const carouselBreakpoints = [
		{
			maxWidth: defaultBreakpoints.bmd,
			capacity: 1,
			jumpSize: 1,
			gap: 0,
		},
	];

	const useProductId = productId ? productId : Math.floor(Math.random() * 10)

	const productData = loadProduct(useProductId);

	const name = productData.name;
	const categories = productData.categories;
	const labels = productData.labels;
	const variants = productData.variants;
	const description = productData.description;
	const links = productData.links;
	const images = productData.images;

	return (
		<div className="flex  bg-white shadow-lg shadow-gray-400 overflow-clip rounded-2xl">
			{/* product image  */}
			<div className="w-full h-full left-0 top-0  bg-blue-200">
				<Carousel
					breakpoints={carouselBreakpoints}
					centerMode={false}
					prevOnFirstWillJumpToLast={true}
				>
					{images
						? images.map((image, index) => (
								<img  src={image} className="w-full h-full" />
						  ))
						: ""}
				</Carousel>
			</div>

			{/* right side. product details  */}
			<div className="p-5 flex flex-col justify-start">
				<div className="flex flex-col justify-start">
					<p className="pt-2 text-5xl font-bold">{name} {useProductId}</p>
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
