import { Filters, FiltersState } from "@/States/filters_state";
import { siteConfig } from "@/config/site";
import { useModal, useTheme } from "@/hooks";
import {
	Accordion,
	AlignItems,
	Colors,
	Divider,
	Field,
	IconButton,
	IconNames,
	Image,
	JustifyContents,
	Link,
	Stack,
	Switch,
	Text,
	Variants,
} from "pol-ui";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
const Header = () => {
	const [filters, setFilters] = useRecoilState<Filters>(FiltersState);
	const updateSearchedName = useCallback(
		(name: string) => {
			setFilters((prev) => ({ ...prev, search: name }));
		},
		[setFilters]
	);

	return (
		<>
			<Link href="https://polgubau.com" variant={Variants.text}>
				{siteConfig.authors[0].name}, 2023
			</Link>
			<Stack
				as="header"
				direction="row"
				gap="8"
				className="relative w-full "
				alignItems={AlignItems.center}
				justify={JustifyContents.start}
			>
				{/* Displaying rick's image with a 200p max */}
				<Image src={"/images/Rick.png"} alt="Rick" width="200px" />
				<Stack direction="column" gap="4" alignItems={AlignItems.start} className="w-full">
					{/* header names */}
					<Text as="h1" className="text-6xl">
						{siteConfig.name}
					</Text>
					<Text as="h2" className="text-xl opacity-75">
						{siteConfig.description}
					</Text>
					<Divider margin="md" color={Colors.background} />
					{/* search Input */}
					<Field
						fullWidth
						label="Seach Characters"
						type="text"
						variant="filled"
						value={filters.search}
						onChange={updateSearchedName}
					/>
				</Stack>
			</Stack>
		</>
	);
};

export default Header;
