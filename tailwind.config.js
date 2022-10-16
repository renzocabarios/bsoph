/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  mode: "aot",
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Visby Round Cf", "Arial", "Helvetica", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#EB9514",
          100: "#EFAA43",
          200: "#F3BF72",
          300: "#F7D5A1",
          400: "#FBEAD0",
        },
        secondary: {
          DEFAULT: "#CC0077",
          100: "#FF009D",
          200: "#FF33AA",
          300: "#FF66BF",
          400: "#FF99D4",
        },
        dark: {
          DEFAULT: "#1D1112",
          100: "#4A1C21",
          200: "#69232B",
          300: "#94312C",
          400: "#B8352E",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      color: ["checked"],
    },
  },
  plugins: [],
};
