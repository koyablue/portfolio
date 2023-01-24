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
        clrBlack: '#333333',
        clrWhite: '#f4f5f7',
        clrBeige: '#fff0e5',
        clrOrange: '#f76c6c',
        appBlue: '#a8d0e6',
        appNavy: '#374785',
        appDarkNavy: '#24305e',
        appYellow: '#f8e9a1',
        appAmber: '#f6ebce',
        appSand: '#ebd4aa',
        appLightGreen: '#a3e3bd',
        appPink: '#e3bcc3',
        appLightBlue: '#a8d3e6',
        clrHyperViolet: '#3a10e5',
        clrGray: '#eeeeee',
        clrYellow: '#ffd300',
      },
      screens: {
        lgm: '1280px',
      },
      animation: {
        "slide-in-fwd-center": "slide-in-fwd-center 0.2s ease-in forwards",
        "slide-out-bck-center": "slide-out-bck-center 0.2s ease-in forwards",
        "slide-in-fwd-left": "slide-in-fwd-left 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
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
        "slide-in-fwd-left": {
          "0%": {
              transform: "translateZ(-1400px) translateX(-1000px)",
              opacity: "0"
          },
          to: {
              transform: "translateZ(0) translateX(0)",
              opacity: "1"
          }
        },
      },
      boxShadow: {
        "noBlurBlack": "15px 15px 0px 0 rgb(51, 51, 51);",
        "noBlurBlackThin": "5px 5px 0px 0 rgb(51, 51, 51);",
        "noBlurBlackMid": "10px 10px 0px 0 rgb(51, 51, 51);",
        "noBlurHyperVioletThin": "5px 5px 0px 0 #3a10e5;",
        "noBlurAppOrangeMid": "10px 10px 0px 0 rgb(247,108,108);",
        "noBlurAppOrangeWide": "20px 20px 0px 0 rgb(247,108,108);",
      },
    },
    plugins: [require("@tailwindcss/line-clamp")],
  },
}
