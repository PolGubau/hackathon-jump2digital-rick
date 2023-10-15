import { Outlet } from "react-router-dom";
import Footer from "./Footer";

interface Props {
	children?: React.ReactNode;
}
// This is the layout we will use in the app, it will display the footer and the children
const Layout: React.FC<Props> = ({ children }) => {
	return (
		<section className="flex justify-center overflow-visible w-full">
			<main className="flex flex-col gap-2 p-4 max-w-5xl w-full mb-16">
				{children ?? <Outlet />} <Footer />
			</main>
		</section>
	);
};

export default Layout;
