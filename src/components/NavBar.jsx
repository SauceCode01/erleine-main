import React from "react";
import { NavLink } from "react-router-dom";
import MaxWidthContainer from "./MaxWidthContainer";

import { sidePadding } from "../config";

const NavBar = () => {
	const linkClass = ({ isActive }) =>
		isActive
			? "text-black underline hover:bg-gray-600 hover:text-white rounded-md px-3 py-2"
			: "text-black hover:bg-gray-600 hover:text-white rounded-md px-3 py-2";
	return (
		<>
			<div className="sticky w-full top-0 left-0 bg-white transition-all z-50 shadow-md">
					<MaxWidthContainer className={`${sidePadding} mx-auto h-20`}>
						<div className="flex items-center justify-center w-full h-full md:items-stretch md:justify-start md:hellow">
							{/* left logo  */}
							<div className="mr-4 flex flex-shrink-0 items-center">
								<div className="ml-2 hidden text-2xl font-bold md:block">
									Erleine
								</div>
							</div>

							{/* links  */}
							<div className="md:ml-auto">
								<div className="flex space-x-2 items-center h-full">
									<NavLink className={linkClass} to="/">
										Home
									</NavLink>
									<NavLink className={linkClass} to="/products">
										Products
									</NavLink>
									<NavLink className={linkClass} to="/categories">
										Categories
									</NavLink>
								</div>
							</div>
						</div>
					</MaxWidthContainer>
				</div>
		</>
	);
};

export default NavBar;
