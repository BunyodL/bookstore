import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#758693",

					secondary: "#405D72",

					accent: "#FFF8F3",

					background: "#F7E7DC",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
export default config;
