import React from "react";
import ProductCarouselBlock from "../components/blocks/productBlocks/ProductCarouselBlock";
import PaddedBlockContainer from "../components/containers/PaddedBlockContainer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CategoriesPage = () => {
	return (
		<>
			<PaddedBlockContainer>
				<ProductCarouselBlock
					title="Oversized Tshirts"
					subtitles={["minimalist", "casual", "oversized"]}
				></ProductCarouselBlock>

				<ProductCarouselBlock
					title="Oversized Tshirts"
					subtitles={["minimalist", "casual", "oversized"]}
				></ProductCarouselBlock>

				<ProductCarouselBlock
					title="Oversized Tshirts"
					subtitles={["minimalist", "casual", "oversized"]}
				></ProductCarouselBlock>

				<ProductCarouselBlock
					title="Oversized Tshirts"
					subtitles={["minimalist", "casual", "oversized"]}
				></ProductCarouselBlock>
			</PaddedBlockContainer>
		</>
	);
};

export default CategoriesPage;
