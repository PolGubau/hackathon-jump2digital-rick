import { useRecoilState } from "recoil";
import ThemeStateAtom from "../states/theme.state";

export const useTheme = () => {
  const [theme, setTheme] = useRecoilState(ThemeStateAtom);

  const toggleDarkMode = () => {
    setTheme({
      ...theme,
      darkMode: !theme.darkMode,
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
