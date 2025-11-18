import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import type { InlineConfig, UserConfig } from "vite";
import { defineConfig } from "vite";
// https://vite.dev/config/
export default defineConfig({
	// Base URL - importante para GitHub Pages
	// Se o repositório for username.github.io, use '/'
	// Se for username.github.io/repo-name, use '/repo-name/'
	base: "/gallery-opt/",
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	test: {
		globals: true,
		setupFiles: ["./test/setup.ts"],
		environment: "happy-dom",
	},
} as UserConfig & {
	test: InlineConfig;
});
