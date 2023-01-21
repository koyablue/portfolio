/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // media query
    screens: {
      xs: '400px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        textMainDark: '#333333',
        textLight: '#f4f5f7',
        bgColorLight: '#f4f5f7',
        appOrange: '#f76c6c',
        appBlue: '#a8d0e6',
        appNavy: '#374785',
        appDarkNavy: '#24305e',
        appYellow: '#f8e9a1',
        // bgColorLight: '#f5f5f5',
      },
      screens: {
        lgm: '1280px',
      }
    },
    plugins: [require("@tailwindcss/line-clamp")],
  },
}
