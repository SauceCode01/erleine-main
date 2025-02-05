import React from "react";
import PageContentContainer from "../containers/PageContentContainer";
import PaddedBlockContainer from "../containers/PaddedBlockContainer";

const Footer = () => {
	return (
		<>
			<div className="w-full  bg-gray-400 ">
				<PageContentContainer>
					<PaddedBlockContainer>
						<div className="w-full p-2 pt-10 md:p-6 m-auto "></div>
						<p className="text-5xl font-bold">Contact us</p>
						<br></br>
						<p className="text-2xl">erleine.printing@gmail.com</p>
						<p className="text-2xl">09776422570</p>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
					</PaddedBlockContainer>
				</PageContentContainer>
			</div>
		</>
	);
};

export default Footer;
