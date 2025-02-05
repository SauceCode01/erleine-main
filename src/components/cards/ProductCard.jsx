import React from "react";

import { useNavigate } from "react-router-dom";

import { loadProduct } from "../../API";

const ProductCard = ({ productId }) => {
	const productData = loadProduct(productId);

	const name = productData.name;
	const categories = productData.categories;
	const labels = productData.labels;
	const variants = productData.variants;
	const description = productData.description;
	const links = productData.links;
	const images = productData.images;

	let maxDescriptionLength = 90;
	const displayDescription =
		description.length > maxDescriptionLength
			? description.substring(0, maxDescriptionLength - 5) + "..."
			: description;

  let navigate = useNavigate()

  const goToProductFocusView = () => {
    console.log("redirect yo")
    navigate(`/products?productId=${productId}`)
  }

	return (
		<div className="w-full" onClick={goToProductFocusView}>
			<div className="aspect-3/5 flex flex-col  bg-white shadow-md hover:shadow-lg shadow-gray-400 overflow-clip cursor-pointer transition-all duration-200">
				<div className="w-full aspect-square overflow-clip flex items-center justify-center">
					<img
						src={images[0]}
						className="w-full aspect-square hover:shadow-lg transition-all duration-200"
					></img>
				</div>
				<div className="p-3 flex flex-col">
					<p className="text-xl font-bold">{name} {productData.id}</p>
					<p>{displayDescription}</p>
					<br></br>
					<button className="cursor-pointer bg-orange-400 hover:bg-orange-500 text-white w-full flex items-center justify-center p-2">
						View on Shopee
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
