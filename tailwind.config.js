/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ["Pinyon Script", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}