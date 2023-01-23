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
        appAmber: '#f6ebce',
        appSand: '#ebd4aa',
        appLightGreen: '#8edfae',
        // bgColorLight: '#f5f5f5',
      },
      screens: {
        lgm: '1280px',
      },
      animation: {
        "slide-in-fwd-center": "slide-in-fwd-center 0.3s ease-in forwards",
        "slide-out-bck-center": "slide-out-bck-center 0.3s ease-in forwards"
      },
      keyframes: {
        "slide-in-fwd-center": {
          "0%": { opacity: 0, visibility: "hidden" },
          "100%": { opacity: 1, visibility: "visible" },
        },
        "slide-out-bck-center": {
          "0%": { opacity: 1, visibility: "visible" },
          "100%": { opacity: 0, visibility: "hidden" },
        },
      },
      boxShadow: {
        "noBlurBlack": "15px 15px 0px 0 rgb(51, 51, 51);",
        "noBlurBlackThin": "5px 5px 0px 0 rgb(51, 51, 51);",
        "noBlurAppOrangeMid": "10px 10px 0px 0 rgb(247,108,108);",
        "noBlurAppOrangeWide": "20px 20px 0px 0 rgb(247,108,108);",
      },
    },
    plugins: [require("@tailwindcss/line-clamp")],
  },
}
