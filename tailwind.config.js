/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}", "./public/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
