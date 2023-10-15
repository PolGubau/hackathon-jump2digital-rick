import { defaultLanguage } from "./../Models/languages";
import { atom } from "recoil";

const LanguageStateAtom = atom({
	key: "LanguageStateAtom",
	default: defaultLanguage,
});

export default LanguageStateAtom;
