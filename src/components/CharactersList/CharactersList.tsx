import { Loader } from "pol-ui";
import NoFound from "../ErrorBoundaries/NoFound";
import Character from "../Character/Character";
import { useFetch } from "@/hooks";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRecoilValue } from "recoil";
import { FiltersState } from "@/Atoms/filters_state";

const CharactersList = () => {
	const filters = useRecoilValue(FiltersState);

	const { characters, error, fetchNextPage, hasNextPage, status } = useFetch({
		name: filters.search,
	});
	if (status === "loading")
		return (
			<div className="grid place-items-center h-full min-h-[400px]">
				<Loader />
			</div>
		);

	if (status === "error") return <NoFound />;
	if (error) return <NoFound />;
	if (characters?.error) return <NoFound />;

	return (
		<InfiniteScroll
			style={{ overflow: "hidden" }}
			dataLength={characters?.results?.length ?? 0}
			next={() => {
				fetchNextPage();
			}}
			hasMore={!!hasNextPage}
			loader={<Loader />}
		>
			<section className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3  ">
				{characters &&
					characters.results?.length > 0 &&
					characters.results.map((character) => (
						<Character key={character.id} character={character} />
					))}
			</section>
		</InfiniteScroll>
	);
};

export default CharactersList;
