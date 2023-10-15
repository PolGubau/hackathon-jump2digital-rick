import { atom } from "recoil";

interface ThemeState {
  darkMode: boolean;
  theme: string;
}

export enum Themes {
  TECH = "tech",
  MAIN = "main",
}

const initialState: ThemeState = {
  darkMode: true,
  theme: Themes.MAIN,
};

const ThemeStateAtom = atom({
  key: "ThemeStateAtom",
  default: initialState,
});

export default ThemeStateAtom;
