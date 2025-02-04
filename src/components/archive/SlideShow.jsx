import React, { useEffect, useState } from "react";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const SlideShow = () => {
	const slides = 3;
	const [index, setIndex] = useState(0);
	const [timeoutId, setTimeoutId] = useState(null);
	var translation = "-translate-x-0/1";

	const handleControlOnClick = (x) => () => {
		let newIndex = index + x;
		if (newIndex < 0) newIndex = slides - 1;
		if (newIndex >= slides) newIndex = 0;
		setIndex(newIndex);
	};

	const getTranslation = () => {
		switch (index) {
			case 0:
				return "-translate-x-0/1";
			case 1:
				return "-translate-x-1/1";
			case 2:
				return "-translate-x-2/1";
		}
	};

	useEffect(() => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		setTimeoutId(
			setTimeout(() => {
				handleControlOnClick(1)();
			}, 5000)
		);
	}, [index]);

	return (
		<>
			{/* wrapper */}
			<div className="w-full">
				<div className="w-full relative rounded-2xl overflow-clip">
					{/* image container */}
					<div className="w-full aspect-4/2 overflow-clip">
						<div
							className={`flex ${getTranslation()} transition-all duration-1000`}
						>
							<img className="w-full aspect-4/2" src={img2}></img>
							<img className="w-full aspect-4/2" src={img3}></img>
							<img className="w-full aspect-4/2" src={img1}></img>
						</div>
					</div>

					{/* controls */}
					<div className="absolute top-0 w-full h-full">
						<div className="w-full h-full flex items-center justify-between">
							<div
								className="opacity-0 hover:opacity-25 bg-gray-300 transition-all duration-200 w-1/5 h-full flex items-center justify-center"
								onClick={handleControlOnClick(-1)}
							>
								prev
							</div>
							<div
								className="opacity-0 hover:opacity-25 bg-gray-300 transition-all duration-200 w-1/5 h-full flex items-center justify-center"
								onClick={handleControlOnClick(1)}
							>
								next
							</div>
						</div>
					</div>

					{/* indicator */}
					<div className="absolute bottom-0 w-full h-2 m-3 ">
						<div className="w-full h-full flex items-center justify-center">
							<div
								className={`${
									0 == index ? "opacity-100" : "opacity-25"
								} bg-white h-full w-10 m-1 rounded-2xl transition-all duration-200`}
							></div>
							<div
								className={`${
									1 == index ? "opacity-100" : "opacity-25"
								} bg-white h-full w-10 m-1 rounded-2xl transition-all duration-200`}
							></div>
							<div
								className={`${
									2 == index ? "opacity-100" : "opacity-25"
								} bg-white h-full w-10 m-1 rounded-2xl transition-all duration-200`}
							></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SlideShow;
