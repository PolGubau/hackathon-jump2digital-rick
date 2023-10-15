/** @type {import('tailwindcss').Config} */

import { PolUITheme } from "pol-ui";

const config = {
  darkMode: "class",

  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extends: {
      PolUITheme,
    },
  },

  plugins: [],
};

export default config;
