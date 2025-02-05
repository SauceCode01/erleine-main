import React from "react";

import { Outlet } from "react-router-dom";

import { backgroundColor } from "../config";
import NavBar from "../components/pageComponents/NavBar";
import Footer from "../components/pageComponents/Footer";
import PageContentContainer from "../components/containers/PageContentContainer";

const MainLayout = () => {
	return (
		<>
			<div className={backgroundColor}>
				<NavBar></NavBar>
				<PageContentContainer>
					<Outlet></Outlet>
				</PageContentContainer>
				<Footer></Footer>
			</div>
		</>
	);
};

export default MainLayout;
