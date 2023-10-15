/** @type {import('tailwindcss').Config} */

import { PolUITheme } from "pol-ui";

const config = {
	darkMode: "class",

	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@tremor/**/*.{js,ts,jsx,tsx}", // Tremor module
	],
	theme: {
		transparent: "transparent",
		current: "currentColor",
		extends: {
			PolUITheme,
		},
	},

	plugins: [],
};

export default config;
