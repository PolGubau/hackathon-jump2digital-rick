import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./Routes";
import { HomePage } from "@/Pages";
import Layout from "@/Layouts/Layout";
import { NoFound } from "@/components";

// Main router of the app, a simple wrapper for react-router-dom
const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.HOME} element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path={ROUTES.ERROR404} element={<NoFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
