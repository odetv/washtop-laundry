/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      nextui: {
        fontFamily: "Poppins, sans-serif",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
