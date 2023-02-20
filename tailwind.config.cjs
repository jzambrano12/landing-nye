/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#fd346e",
        purple: "#5f28d3",
        lila: "#f3effe",
      },
      // keyframes: {
      //   wiggle: {
      //     "0%, 100%": { transform: "rotate(-3deg)" },
      //     "50%": { transform: "rotate(3deg)" },
      //   },
      // },
      // animation: {
      //   wiggle: "wiggle 1s ease-in-out infinite",
      // },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
