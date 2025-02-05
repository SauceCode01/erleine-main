import React, { useEffect, useRef } from "react";

import { defaultBreakpoints } from "../config";

import img1 from "../assets/img1.png";
import FeatureBlock from "../components/blocks/auxiliaryBlocks/FeatureBlock";
import PaddedBlockContainer from "../components/containers/PaddedBlockContainer";
import CategoryCarouselBlock from "../components/blocks/productBlocks/CategoryCarouselBlock";
import ProductCarouselBlock from "../components/blocks/productBlocks/ProductCarouselBlock";
import ProductFocusBlock from "../components/blocks/productBlocks/ProductFocusBlock";
import MagazineBlock from "../components/blocks/auxiliaryBlocks/MagazineBlock";
import ExternalLinkBlock from "../components/blocks/auxiliaryBlocks/ExternalLinkBlock";

// import Carousel from "../components/carousel/Carousel";
// import CategoryCarousel from "../components/carousel/CategoryCarousel";
// // import ProductCarousel from "../components/carousels/ProductCarousel";
// // import FocusProductCard from "../components/carousels/cards/FocusProductCard";
// import InfoLanding from "../components/blocks/auxiliaryBlocks/MagazineBlock";
// import SingleImageCarousel from "../components/blocks/auxiliaryBlocks/FeatureBlock";
// import SocialPagesLanding from "../components/blocks/auxiliaryBlocks/ExternalLinkBlock";
// import MaxWidthContainer from "../components/MaxWidthContainer";

// import ProductCarouselBlock from "../components/blocks/productBlocks/ProductCarouselBlock"
// import CategoryCarouselBlock from "../components/blocks/productBlocks/CategoryCarouselBlock";

// have a list of all breakpoints that all component should react to (use context i guess...)

const HomePage = () => {
	const breakpoints = [
		{
			maxWidth: defaultBreakpoints.bmd,
			capacity: 1,
			jumpSize: 1,
			gap: 0,
		},
	];

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
					header={{
						title: "T shirt",
						subtitles: ["minimalist", "casual", "oversized"],
					}}
				></ProductCarouselBlock>

				<ProductCarouselBlock
					header={{
						title: "Minimalist Tshirts",
						subtitles: ["minimalist", "casual", "oversized"],
					}}
				></ProductCarouselBlock>

				<ProductFocusBlock productId={1}></ProductFocusBlock>
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
