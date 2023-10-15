export enum LanguageCodes {
	EN = "en",
	ES = "es",
}
export type LanguageCode = `${LanguageCodes}`;

export interface Language {
	code: LanguageCode;
	name: string;
	flag: string;
	available: boolean;
}

export const Languages: Language[] = [
	{
		code: LanguageCodes.EN,
		name: "English",
		flag: "US",
		available: true,
	},
	{
		code: LanguageCodes.ES,
		name: "Español",
		flag: "ES",
		available: true,
	},
];

export const availableLanguages = Languages.filter((lang) => lang.available);

export const defaultLanguage = availableLanguages[0];
