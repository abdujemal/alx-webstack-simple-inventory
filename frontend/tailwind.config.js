/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

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
        scrollbarTrack: '#f1f1f1',
        scrollbarThumb: '#B893CB',
        scrollbarThumbHover: '#555',
      },
      animation: {
        'spin-fast': 'spin 1s linear infinite',
        'spin-slower': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities, theme, e }) {
      const scrollbarWidth = theme('scrollbarWidth', 'auto');
      const scrollbarColors = theme('colors', {});

      const scrollbar = {
        '.scrollbar': {
          scrollbarWidth: scrollbarWidth,
        },
        '.scrollbar::-webkit-scrollbar': {
          width: '5px',
          height:'5px',
        },
        '.scrollbar::-webkit-scrollbar-track': {
          background: scrollbarColors.scrollbarTrack || '#f1f1f1',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          background: scrollbarColors.scrollbarThumb || '#888',
          borderRadius: '8px',
        },
        '.scrollbar::-webkit-scrollbar-thumb:hover': {
          background: scrollbarColors.scrollbarThumbHover || '#555',
        },
      };

      addUtilities(scrollbar, ['responsive', 'hover']);
    }),
  ],
}