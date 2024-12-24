import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Import the React plugin

export default defineConfig({
	plugins: [
		react(), // Add the React plugin here
	],
	resolve: {
		alias: {
			"@": "/src", // Example alias, adjust it to your project structure
		},
	},
	build: {
		json: {
			stringify: true, // Ensure JSON handling
		},
	},
});
