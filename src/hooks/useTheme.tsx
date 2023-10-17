import ThemeStateAtom from "@/Atoms/theme_state";
import { useRecoilState } from "recoil";

export const useTheme = () => {
	const [theme, setTheme] = useRecoilState(ThemeStateAtom);

	const toggleDarkMode = () => {
		const newState = !theme.darkMode;
		setTheme({
			...theme,
			darkMode: newState,
		});
	};

	const applyTheme = (newTheme: string) => {
		setTheme({
			...theme,
			theme: newTheme,
		});
	};

	return { theme, applyTheme, toggleDarkMode };
};
