import { Filters, FiltersState } from "@/Atoms/filters_state";
import { Text, Image, Button, IconNames, Colors } from "pol-ui";
import { useRecoilState } from "recoil";

const NoFound = () => {
	const [filters, setFilters] = useRecoilState<Filters>(FiltersState);

	const sentence = `Ummm ${filters.search}? I've never heard of it...`;

	return (
		<div className="grid place-items-center h-full min-h-[400px]">
			<Image src={"/images/noFound.gif"} alt="404" width="200px" />
			{filters.search && <Text as="h4" className="text-xl" value={sentence} />}
			<Button
				onClick={() => setFilters({ ...filters, search: "" })}
				icon={IconNames.rotate}
				className="mt-4"
				color={Colors.accent}
			>
				Reset Filters
			</Button>
		</div>
	);
};

export default NoFound;
