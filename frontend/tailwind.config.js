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
      animation: {
        'spin-fast': 'spin 1s linear infinite',
        'spin-slower': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}