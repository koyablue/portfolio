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
        clrWhiteOpa: 'rgb(244,245,247,0.85)',
        clrBeige: '#fff0e5',
        appBlue: '#a8d0e6',
        clrNavy: '#374785',
        clrDarkNavy: '#10162f',
        clrYellow: '#ffd300',
        appAmber: '#f6ebce',
        appSand: '#ebd4aa',
        clrLightGreen: '#a3e3bd',
        clrNeonGreen: '#39ff14',
        clrPalePink: '#fff5ff',
        clrNeonPink: '#ff10f0',
        clrPaleBlue: '#f5fcff',
        clrHyperViolet: '#3a10e5',
        clrGray: '#eeeeee',
        clrYellow: '#ffd300',
        clrThickNavy: '#262f52',
        clrOrange: '#eb4431',
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
        "noBlurBlack15px": "15px 15px 0px 0 rgb(51, 51, 51);",
        "noBlurBlack5px": "5px 5px 0px 0 rgb(51, 51, 51);",
        "noBlurBlack10px": "10px 10px 0px 0 rgb(51, 51, 51);",
        "noBlurWhiteOpa3px": "3px 3px 0px 0px rgb(244,245,247,0.85)",
        "noBlurWhiteOpa5px": "5px 5px 0px 0px rgb(244,245,247,0.85)",
      },
      fontFamily: {
        cabin: ['var(--font-cabin)'],
      }
    },
    plugins: [require("@tailwindcss/line-clamp")],
  },
  darkMode: 'class',
}
