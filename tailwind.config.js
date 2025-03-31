/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				'bounce-slow': 'bounce 2s infinite',
				'bounce-fast': 'bounce 0.5s infinite',
				'spin-slow': 'spin 3s linear infinite',
				'spin-fast': 'spin 0.5s linear infinite',
				'border-move': 'borderMove 2s linear infinite',
				move: 'move 45s linear infinite',
				moveup: 'moveup 15s linear infinite'
			},
			keyframes: {
				spin: {
					from: {
						transform: 'rotate(0deg)'
					},
					to: {
						transform: 'rotate(360deg)'
					}
				},
				move: {
					'100%': {
						transform: 'translate3d(0, 0, 1px) rotate(360deg)'
					}
				},
				moveup: {
					'0%': {
						transform: 'translateY(0) rotate(0deg)',
						opacity: '1',
						borderRadius: '0'
					},
					'100%': {
						transform: 'translateY(-600px) rotate(720deg)',
						opacity: '1',
						borderRadius: '40%'
					}
				},
				borderMove: {
					'0%': { borderColor: 'transparent' },
					'50%': { borderColor: '#3b82f6' }, // Blue color
					'100%': { borderColor: 'transparent' },
				},
			},
			colors: {
				primary: {
					light: 'var(--primary-light)',
					DEFAULT: 'hsl(var(--primary))',
					dark: 'var(--primary-dark)',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					light: 'var(--secondary-light)',
					DEFAULT: 'hsl(var(--secondary))',
					dark: 'var(--secondary-dark)',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				'.delay-0': { animationDelay: '0s' },
				'.delay-1': { animationDelay: '1s' },
				'.delay-2': { animationDelay: '2s' },
				'.delay-3': { animationDelay: '3s' },
				'.delay-4': { animationDelay: '4s' },
				'.delay-5': { animationDelay: '5s' },
				'.delay-10': { animationDelay: '10s' },
				'.delay-15': { animationDelay: '15s' },
			};
			addUtilities(newUtilities);
		},
		//   require("tailwindcss-animate"),	
	],
};
