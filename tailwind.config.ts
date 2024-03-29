import type { Config } from "tailwindcss";

const config = {
	darkMode: "class",
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite-react/lib/**/*.js",
	],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('/images/fondo.jpg')",
			},
			colors: {
				primary: "#f80605",
				secondary: "#404494",
				"white-light": "#f1ecf2",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
} satisfies Config;

export default config;
