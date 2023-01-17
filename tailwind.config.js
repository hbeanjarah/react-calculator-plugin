/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      gray: "#E5E5E5",
      "gray-dark-light": "#F5F5F5",
      "gray-dark": "#989898",
      "gray-dark-900": "#00000099",
    },
    extend: {
      width: {
        100: "6.25rem",
      },
    },
  },
  plugins: [],
};
