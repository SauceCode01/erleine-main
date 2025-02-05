import React, { useEffect, useRef } from "react";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductsPage from "./pages/ProductsPage";
import CategoriesPage from "./pages/CategoriesPage";
import TemporaryPage from "./pages/TemporaryPage";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<MainLayout/>}>
					<Route index element={<HomePage />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/categories" element={<CategoriesPage />} />
					<Route path="/temp" element={<TemporaryPage />} />
				</Route>
			</>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
