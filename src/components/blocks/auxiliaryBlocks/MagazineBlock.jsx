import React from "react";

import img1 from "../../../assets/img4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MagazineBlock = ({ className, children }) => {
	

	return (
		<>
			<div className="relative w-full bg-pink-300">
				<div className=" top-0 left-0 w-full">

					<Swiper
						modules={[Autoplay]}
						slidesPerView={1}
						rewind={true}
						autoplay={{ delay: 3000 }}
						className="w-full left-0 top-0  bg-blue-200 aspect-4/2"
					>
						<SwiperSlide>
							<img src={img1} className="w-full h-full" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={img1} className="w-full h-full" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={img1} className="w-full h-full" />
						</SwiperSlide>

					</Swiper>
				</div>

				<div className="absolute top-0 left-0 p-5 pr-[20%] w-full h-full overflow-hidden z-2">
					<h1 className="text-white text-5xl font-bold">
						Erleine Design and Printing Services
					</h1>
					<p className="text-white text-xl font-bold">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						adipisci, ratione necessitatibus quia dignissimos illo dolor tenetur
						ipsum accusantium eos doloribus reiciendis esse voluptatum, vero
						voluptatibus repellat laudantium placeat aliquid.
					</p>
				</div>
			</div>
		</>
	);
};

export default MagazineBlock;
