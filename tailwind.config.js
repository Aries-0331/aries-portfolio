/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["var(--font-montserrat)"],
				luxurious_roman: ["var(--font-luxurious-roman)"],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				autoRun: "autoRun 40s linear infinite",
				autoFlow: "autoFlow 30s linear infinite",
			},
			keyframes: {
				autoRun: {
					from: {
						transform: "perspective(1000px) rotateX(-10deg) rotateY(0deg)",
					},
					to: {
						transform: "perspective(1000px) rotateX(-10deg) rotateY(360deg)",
					},
				},
				autoFlow: {
					"0%": {
						transform: "translate-x-0",
					},
					"100%": {
						transform: "translate-x(-100%)",
					},
				},
			},
		},
	},
};
