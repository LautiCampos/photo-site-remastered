import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				playfair: ["Playfair Display", "serif"],
			},
			colors: {
				greenprimary: {
					light: "#ADE792",
					DEFAULT: "#5BA85F",
					dark: "#38713D",
				},
				orangeaccent: {
					light: "#FFD89B",
					DEFAULT: "#FFA743",
					dark: "#FF7C07",
				},
				offwhite: "#f8f6f3",
				grayborder: "#e2e8f0",
			},
			borderColor: {
				DEFAULT: "#e2e8f0",
				gray: "#e2e8f0",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        "fade-in": {
				  "0%": { opacity: "0", transform: "translateY(10px)" },
				  "100%": { opacity: "1", transform: "translateY(0)" },
				},
        "fade-in-down": {
				  "0%": { opacity: "0", transform: "translateY(-15px)" },
				  "100%": { opacity: "1", transform: "translateY(0)" }
				},
        "scale-in": {
				  "0%": { transform: "scale(0.95)", opacity: "0" },
				  "100%": { transform: "scale(1)", opacity: "1" }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        "fade-in": "fade-in 0.8s cubic-bezier(.3,.7,.4,1) both",
        "fade-in-down": "fade-in-down 0.8s cubic-bezier(.3,.7,.4,1) both",
        "scale-in": "scale-in 0.8s cubic-bezier(.3,.7,.4,1) both",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
