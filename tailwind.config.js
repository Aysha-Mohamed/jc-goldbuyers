/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'archivo-black': ['Archivo Black', 'sans-serif'],
        'barlow': ['Barlow Condensed', 'sans-serif'],
        'commissioner': ['Commissioner', 'sans-serif'],
      },
    },
  },
  plugins: [],
};