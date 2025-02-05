import React from "react";
import ProductCarouselBlock from "../components/blocks/productBlocks/ProductCarouselBlock";
import PaddedBlockContainer from "../components/containers/PaddedBlockContainer";
import ProductCard from "../components/cards/ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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
