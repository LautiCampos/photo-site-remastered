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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
			colors: {
        // Brand greens and oranges
        primarygreen: {
          DEFAULT: '#1B6D31', // dark green
          dark: '#136022',    // darker green
          light: '#B1DFBB',   // light green
          muted: '#76B79D',   // muted/soft green
        },
        accentorange: {
          DEFAULT: '#FC7A1E', // vivid orange
          dark: '#C05E14',    // dark orange
          light: '#FFD8A8',   // light orange
          soft: '#FFE9D2',    // pale orange
        },
        background: '#FEFBF6', // very light cream background
        // Fallbacks in case legacy classes exist (can reference new ones)
        offwhite: '#FEFBF6',
        primarybrown: '#1B6D31', // replaced with green for compatibility
        accentburgundy: '#FC7A1E', // replaced with orange for compatibility
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0.95)', opacity: '0'
          },
          '100%': {
            transform: 'scale(1)', opacity: '1'
          }
        },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.8s cubic-bezier(.3,.7,.4,1) both',
        'fade-in-down': 'fade-in-down 0.8s cubic-bezier(.3,.7,.4,1) both',
        'scale-in': 'scale-in 0.8s cubic-bezier(.3,.7,.4,1) both',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
