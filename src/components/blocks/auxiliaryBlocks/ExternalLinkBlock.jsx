import React from "react";

import img1 from "../../../assets/img1.png";

const ExternalLinkBlock = () => {
	return (
		<>
			<div className="flex gap-5">
				<div className="bg-sky-200 p-2 aspect-3/5">
					<p>Visit us on</p>
					<p>Shopee</p>
					<img src={img1} className="aspect-4/2"></img>
					<p>Click me!</p>
				</div>
				<div className="bg-sky-200 p-2">
					<p>Visit us on</p>
					<p>Shopee</p>
					<img src={img1} className="aspect-4/2"></img>
					<p>Click me!</p>
				</div>
				<div className="bg-sky-200 p-2">
					<p>Visit us on</p>
					<p>Shopee</p>
					<img src={img1} className="aspect-4/2"></img>
					<p>Click me!</p>
				</div>
			</div>
		</>
	);
};

export default ExternalLinkBlock;
