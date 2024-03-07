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
				"hero-pattern":
					"https://as1.ftcdn.net/v2/jpg/06/72/41/80/1000_F_672418070_2h1n7tYbiA2hYFdFmyo8ZqR6NcHehVMM.jpg",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
} satisfies Config;

export default config;
