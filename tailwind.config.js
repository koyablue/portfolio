/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainGradation: 'linear-gradient(90deg, rgba(243, 196, 170, 1), rgba(228, 81, 154, 1) 50%, rgba(77, 84, 224, 1))',
      }
    },
  },
  plugins: [],
}
