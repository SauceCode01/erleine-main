import React from "react";

import FeatureBlock from "../components/blocks/auxiliaryBlocks/FeatureBlock";
import PaddedBlockContainer from "../components/containers/PaddedBlockContainer";
import CategoryCarouselBlock from "../components/blocks/productBlocks/CategoryCarouselBlock";
import ProductCarouselBlock from "../components/blocks/productBlocks/ProductCarouselBlock";
import ProductFocusBlock from "../components/blocks/productBlocks/ProductFocusBlock";
import MagazineBlock from "../components/blocks/auxiliaryBlocks/MagazineBlock";
import ExternalLinkBlock from "../components/blocks/auxiliaryBlocks/ExternalLinkBlock";

const HomePage = () => {
	return (
		<>
			<div className="w-full bg-white shadow-2xl shadow-gray-600">
				<PaddedBlockContainer>
					<FeatureBlock></FeatureBlock>
					<CategoryCarouselBlock></CategoryCarouselBlock>
				</PaddedBlockContainer>
			</div>

			<PaddedBlockContainer>
				<ProductCarouselBlock
					title="Oversized Tshirts"
					subtitles={["minimalist", "casual", "oversized"]}
				></ProductCarouselBlock>

				<ProductCarouselBlock
					title="Oversized Tshirts"
					subtitles={["minimalist", "casual", "oversized"]}
				></ProductCarouselBlock>

				<ProductFocusBlock></ProductFocusBlock>
			</PaddedBlockContainer>

			<MagazineBlock></MagazineBlock>

			<PaddedBlockContainer>
				<ExternalLinkBlock></ExternalLinkBlock>
			</PaddedBlockContainer>
		</>
	);
};

export default HomePage;

{
	/* <section className="w-full m-auto  bg-white shadow-2xl shadow-gray-300 ">
<InfoLanding></InfoLanding>
</section> */
}
