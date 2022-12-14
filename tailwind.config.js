/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media' or 'class'
  content: ["./public/**/*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        sanFrancisco: "url('../img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
        yosemite: "url('../img/yosemite.jpg')",
        LA: "url('../img/LA.jpg')",
        seattle: "url('../img/seattle.jpg')",
        new_york: "url('../img/new_york.jpg')",
        norway: "url('../img/norway.jpg')",
        sydney: "url('../img/sydney.jpg')",
        miami: "url('../img/miami.jpg')",
        switzerland: "url('../img/switzerland.jpg')",
        bali: "url('../img/bali.jpg')",
        norway: "url('../img/norway.jpg')",
        chicago: "url('../img/chicago.jpg')",
        europe: "url('../img/europe.jpg')",
        iceland: "url('../img/iceland.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#cc2d4a",
        secondary: "#8fa206",
        terciary: "#61aec9",
      }),
      textColor: {
        primary: "#cc2d4a",
        secondary: "#8fa206",
        terciary: "#61aec9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extends: {},
  },
  plugins: [],
};
