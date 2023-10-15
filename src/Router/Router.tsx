import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthGuard, RoleGuard } from "@/guard";
import { AdminRoutes, PrivateRoutes, PublicRoutes, ROUTES } from "./Routes";
import { Roles } from "@/Models";
import {
	HomePage,
	LoginPage,
	ProfilePage,
	CreatePage,
	TrainingPage,
	DiscoverPage,
	EditPersonal,
	EditProfile,
	FaqPage,
} from "@/Pages";
import { GoalsPage } from "@/Pages/User/GoalsPage";
import AppSettings from "@/Pages/User/ProfilePage/AppSettings/AppSettings";
import { HelpPage } from "@/Pages/User/ProfilePage/HelpPage";
import AboutUsPage from "@/Pages/User/ProfilePage/AboutUs/AboutUsPage";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={PublicRoutes.LOGIN} element={<LoginPage />} />
				<Route element={<AuthGuard />}>
					<Route path={PrivateRoutes.HOME} element={<HomePage />} />
					<Route path={PrivateRoutes.CREATE} element={<CreatePage />} />
					<Route path={PrivateRoutes.DISCOVER} element={<DiscoverPage />} />
					<Route path={PrivateRoutes.TRAINING} element={<TrainingPage />} />
					<Route path={PrivateRoutes.GOALS} element={<GoalsPage />} />

					<Route path={PrivateRoutes.PROFILE}>
						<Route index element={<ProfilePage />} />
						<Route path={ROUTES.EDIT_PROFILE} element={<EditProfile />} />
						<Route path={ROUTES.EDIT_PERSONAL} element={<EditPersonal />} />
						<Route path={ROUTES.APP_SETTINGS} element={<AppSettings />} />
						<Route path={ROUTES.HELP_SUPPORT} element={<HelpPage />} />
						<Route path={ROUTES.FAQ} element={<FaqPage />} />
						<Route path={ROUTES.ABOUT} element={<AboutUsPage />} />
					</Route>

					<Route element={<RoleGuard rol={Roles.ADMIN} />}>
						<Route path={AdminRoutes.ADMIN} element={<h1>Admin</h1>} />r
					</Route>
				</Route>

				<Route path={PublicRoutes.ERROR404} element={<h1>Not Found</h1>} />
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
