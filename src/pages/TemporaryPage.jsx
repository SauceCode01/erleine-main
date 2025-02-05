import React from "react";

import ProductCarouselBlock from "../components/blocks/productBlocks/ProductCarouselBlock";
import ProductFocusBlock from "../components/blocks/productBlocks/ProductFocusBlock";
import ExternalLinkBlock from "../components/blocks/auxiliaryBlocks/ExternalLinkBlock";
import FeatureBlock from "../components/blocks/auxiliaryBlocks/FeatureBlock";
import MagazineBlock from "../components/blocks/auxiliaryBlocks/MagazineBlock";
import CategoryCarouselBlock from "../components/blocks/productBlocks/CategoryCarouselBlock";
import ProductLibraryBlock from "../components/blocks/productBlocks/ProductLibraryBlock";



const TemporaryPage = () => {
	return (
		<>
		<div className="flex flex-col gap-2">

		<h1>AUXILIARY BLOCKS</h1>
		<h1>external link block</h1>
		<ExternalLinkBlock></ExternalLinkBlock>
		<h1>feature block</h1>
		<FeatureBlock></FeatureBlock>
		<h1>magazine block</h1>
		<MagazineBlock></MagazineBlock>
		<br></br>
		<h1>PRODUCT BLOCKS</h1>
		<h1>category carousel</h1>
		<CategoryCarouselBlock></CategoryCarouselBlock>
		<h1>product carousel block</h1>
		<ProductCarouselBlock title="product carousel block" subtitles={["one", "two", "three"]}></ProductCarouselBlock>
		<h1> product focus block</h1>
		<ProductFocusBlock></ProductFocusBlock>
		<h1>rodcut library block</h1>
		<ProductLibraryBlock></ProductLibraryBlock>
		</div>
		</>
	);
};

export default TemporaryPage;
