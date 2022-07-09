/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xss: "200px",
      xs: "300px",
      sm: "400px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      Bebas: ["'Bebas Neue', cursive"],
      Roboto: ["'Roboto', sans-serif"],
      DmSans: ["'DM Sans', sans-serif"],
    },
    extend: {
      dropShadow: {
        "custom-shadow": "0 10px 3px rgba(153, 153, 153, 1)",
      },
    },
  },
  plugins: [],
};
