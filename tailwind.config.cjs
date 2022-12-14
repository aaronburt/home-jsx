/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,css,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'small': '0px',
        'phone': '360px',
        'tablet': '640px',
        'laptop': '1280px',
        'desktop': '1920px' 
      }
    },
  },
  plugins: [],
}