/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Montserrat", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        brandBlue: "#0D4B9E",
        brandOrange: "#F7931E",
        brandGrey: "#6D6E71",
        brandLight: "#E5E5E5",
      },
    },
  },
  plugins: [],
};
