/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {},
    colors: {
      "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
      "desaturated-dark-blue": "hsl(214, 17%, 51%)",
      "grayish-blue": "hsl(212, 23%, 69%)",
      "light-grayish-blue": "hsl(210, 46%, 95%)",
      white: "white",
    },
    fontFamily: {
      "ff-primary": ["Manrope", "sans-serif"],
    },
  },
  plugins: [],
};
