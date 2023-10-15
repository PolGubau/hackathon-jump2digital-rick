import { siteConfig } from "@/config/site";
import { useTheme } from "@/hooks";
import { AlignItems, Colors, Image, JustifyContents, Stack, Switch, Text } from "pol-ui";

// The footer is a simple component that displays the name of the author, the description of the site and a input to filter the characters by name.
const Footer = () => {
	const { theme, toggleDarkMode } = useTheme();

	return (
		<>
			<Stack
				as="footer"
				direction="row"
				gap={20}
				className="p-4"
				alignItems={AlignItems.end}
				justify={JustifyContents.between}
			>
				<Image src={"/images/Rick.png"} alt="Rick" width="80px" />
				<Stack direction="column" gap="4" alignItems={AlignItems.start}>
					<Text as="h2" className="text-xl">
						{siteConfig.description}
					</Text>
					<div className="flex gap-1 items-center">
						<Text color={Colors.contrast} as="h3" className="text-xl">
							{"With love, " + siteConfig.authors[0].name}
						</Text>
					</div>
				</Stack>
				<Switch label="Dark Theme" checked={theme.darkMode} onChange={toggleDarkMode} />
			</Stack>
			<a
				href="https://polgubau.com"
				className="flex justify-center"
				target="_blank"
				rel="noreferrer"
			>
				<img src="/favicon.svg" alt="portal" className="w-32" />
			</a>
		</>
	);
};

export default Footer;
