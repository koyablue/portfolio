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
      },
      animation: {
        "slide-in-fwd-center": "slide-in-fwd-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-out-fwd-center": "slide-out-fwd-center 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
        "slide-out-bck-center": "slide-out-bck-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both"
      },
      keyframes: {
        "slide-in-fwd-center": {
            "0%": {
                transform: "translateZ(-1400px)",
                opacity: "0",
                visibility: "collapse"
            },
            to: {
                transform: "translateZ(0)",
                opacity: "1",
                visibility: "visible"
            }
        },
        "slide-out-fwd-center": {
          "0%": {
              transform: "translateZ(1)",
              opacity: "1",
              visibility: "visible"
          },
          to: {
              transform: "translateZ(600px)",
              opacity: "0",
              visibility: "collapse"
          }
        },
        "slide-out-bck-center": {
          "0%": {
              transform: "translateZ(0)",
              opacity: "1"
          },
          to: {
              transform: "translateZ(-1100px)",
              opacity: "0"
          }
        },
      },
    },
    plugins: [require("@tailwindcss/line-clamp")],
  },
}
