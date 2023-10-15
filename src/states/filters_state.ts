import { atom } from "recoil";

export interface Filters {
	search: string;
}

export const FiltersState = atom<Filters>({
	key: "FiltersState",
	default: {
		search: "",
	},
});
