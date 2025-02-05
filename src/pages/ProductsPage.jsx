import React from "react";
import PaddedBlockContainer from "../components/containers/PaddedBlockContainer";
import ProductCarouselBlock from "../components/blocks/productBlocks/ProductCarouselBlock";
import ProductFocusBlock from "../components/blocks/productBlocks/ProductFocusBlock";

const ProductsPage = () => {
	return (
		<>
			<PaddedBlockContainer>
				{/* title  */}
				<div className="flex items-center justify-center p-10">
					<h1 className="text-5xl font-bold">Products</h1>
				</div>

				<ProductCarouselBlock
					title="Oversized Tshirts"
					subtitles={["minimalist", "casual", "oversized"]}
				></ProductCarouselBlock>
				<br/>

				<ProductFocusBlock></ProductFocusBlock>

				<ProductCarouselBlock
					title="Oversized Tshirts"
					subtitles={["minimalist", "casual", "oversized"]}
				></ProductCarouselBlock>
				<br/>

				<ProductCarouselBlock
					title="Oversized Tshirts"
					subtitles={["minimalist", "casual", "oversized"]}
				></ProductCarouselBlock>
				<br/>
			</PaddedBlockContainer>
		</>
	);
};

export default ProductsPage;
