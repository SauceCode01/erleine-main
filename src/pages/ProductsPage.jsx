import React from "react";
import ProductCarousel from "../components/carousels/ProductCarousel";
import { sidePadding } from "../config";
import ProductsLibrary from "../components/library/ProductsLibrary";
import ProductsYouMayLike from "../components/library/ProductsYouMayLike";
import FocusProductCard from "../components/carousels/cards/FocusProductCard";

const ProductsPage = () => {
	return (
		<>
			{/* title  */}
			<div className="flex items-center justify-center p-10">
				<h1 className="text-5xl font-bold">Products</h1>
			</div>

			{/* products in categories  */}
      
      <ProductsLibrary></ProductsLibrary>
			<br></br>
			<br></br>


      <ProductsYouMayLike></ProductsYouMayLike>
      
      <ProductsLibrary></ProductsLibrary>
			<br></br>
			<br></br>

      <FocusProductCard></FocusProductCard>

			<div className={`${sidePadding}`}>
				<ProductCarousel />
			</div>
			<br></br>
			<br></br>

      
			<div className={`${sidePadding}`}>
				<ProductCarousel />
			</div>
			<br></br>
			<br></br>

		</>
	);
};

export default ProductsPage;
