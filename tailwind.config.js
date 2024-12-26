/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f8f9fa', // Light shade
          default: '#1F2937', // Default shade
          dark: '#343a40', // Dark shade
        },
        secondary: '#3461E2', // A single custom color
        accent: '#FFB300',
      },
    }
  },
  plugins: [],
}

