/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        leckerli: ['Leckerli One', 'cursive'], // Add the Leckerli One font here
      },
      colors: {
        primary: '#56448a',
        secondary: '#7869a1',
      },
    },
  },
  plugins: [],
}