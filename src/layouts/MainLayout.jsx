import React from "react";

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/landings/Footer";
import MaxWidthContainer from "../components/MaxWidthContainer";


import { backgroundColor } from "../config";


const MainLayout = () => {
	return (
		<>
			<div className={backgroundColor}>
				<NavBar></NavBar>
				<MaxWidthContainer>
					<Outlet></Outlet>
				</MaxWidthContainer>
				<Footer></Footer>
			</div>
		</>
	);
};

export default MainLayout;
