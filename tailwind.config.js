/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#DE4043",
        red2: "#FFC6CA",
        blue: "#2084BA",
        blue2: "#CAEDFF",
      },
    },
  },
  plugins: [],
};
