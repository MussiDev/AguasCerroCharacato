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
				hero: "url('https://tangol.com/blog/Fotos/Notas/reserva-natural-villavicencio_337_202102181152000.JPG')",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
} satisfies Config;

export default config;
