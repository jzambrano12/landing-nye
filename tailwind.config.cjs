/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#fd346e",
        purple: "#5f28d3",
      },
    },
  },
  plugins: [],
};
