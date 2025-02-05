import React from "react";
import PaddedBlockContainer from "../components/containers/PaddedBlockContainer";
import ProductLibraryBlock from "../components/blocks/productBlocks/ProductLibraryBlock";
import ProductFocusBlock from "../components/blocks/productBlocks/ProductFocusBlock";

const ProductsPage = () => {
	return (
		<>
			<PaddedBlockContainer>
				{/* title  */}
				<div className="flex items-center justify-center p-10">
					<h1 className="text-5xl font-bold">Products</h1>
				</div>

				<ProductLibraryBlock
					header={{
						title: "Minimalist Tshirts",
						subtitles: ["minimalist", "casual", "oversized"],
					}}
				></ProductLibraryBlock>

				<ProductFocusBlock></ProductFocusBlock>
				
				<ProductLibraryBlock
					header={{
						title: "Oversized Tshirts",
						subtitles: ["minimalist", "casual", "oversized"],
					}}
				></ProductLibraryBlock>
				
				<ProductLibraryBlock
					header={{
						title: "Casual Tshirts",
						subtitles: ["minimalist", "casual", "oversized"],
					}}
				></ProductLibraryBlock>
			</PaddedBlockContainer>
		</>
	);
};

export default ProductsPage;
