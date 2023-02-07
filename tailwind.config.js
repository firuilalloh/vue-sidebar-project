/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins','sans-serif'],
        'montserrat': ['montserrat', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif']
      },
      inset: {
        '480px': '480px',
      }
    },
  },
  plugins: [],
}
