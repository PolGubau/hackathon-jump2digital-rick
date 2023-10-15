import CharactersList from "@/components/CharactersList/CharactersList";
import Header from "@/Layouts/Header";

// Main page of the app
const HomePage = () => {
	return (
		<section className="flex flex-col gap-4 w-full  ">
			<Header />
			<CharactersList />
		</section>
	);
};

export default HomePage;
