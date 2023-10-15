import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

const defaultConfig = {
	plugins: [svgr(), react()],
	build: {
		commonjsOptions: {
			esmExternals: true,
		},
	},
	optimizeDeps: {
		include: ["pol-ui"],
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/setupTests.ts",

		coverage: {
			reporter: ["text", "html"],
			exclude: ["node_modules/", "src/setupTests.ts"],
		},
	},
	// server: {
	// 	host: true,
	// 	port: 3000,
	// 	proxy: {
	// 		"/api": {
	// 			target: "https://api-trackup.azurewebsites.net",
	// 			changeOrigin: true,
	// 			secure: false,
	// 			rewrite: (path) => path.replace(/^\/api/, ""),
	// 		},
	// 	},
	// },
	resolve: {
		alias: {
			"styled-components": path.resolve(__dirname, "node_modules", "styled-components"),
			"@": path.resolve(__dirname, "src/"),
		},
	},
};
export default defineConfig(({ command, mode }) => {
	if (command === "serve") {
		const isDev = mode === "development";

		return {
			...defaultConfig,
			server: {
				proxy: {
					"/api/": {
						target: isDev ? "https://127.0.0.1:8080" : "https://api-trackup.azurewebsites.net",
						changeOrigin: isDev,
						secure: !isDev,
					},
				},
			},
		};
	} else {
		return defaultConfig;
	}
});
