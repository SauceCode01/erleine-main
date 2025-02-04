import React from "react";

import ProductCard from "./ProductCard";

const ProductContainer = () => {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-8 gap-6 p-10 border-2 border-gray-950">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</>
	);
};

export default ProductContainer;
