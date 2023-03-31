/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      questrial: "Questrial",
    },
    extend: {
      colors: {
        darkMainBg: "#111827",
        darkBodyBg: "#0b0f19",
        cartBg: "#06080c",
      },
      gridTemplateColumns: {
        "minmax-uto-200": "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-muted": {
          opacity: 0.8,
        },
        ".transition-a": {
          transition: "all 0.3s ease-in-out",
        },
        ".border-light": {
          border: "1px solid rgba(46, 46, 46, 0.1)",
        },
        ".flex-center-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        ".flex-align-center": {
          display: "flex",
          alignItems: "center",
        },
        ".flex-shrink-12": {
          flex: "1 1 12rem",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
