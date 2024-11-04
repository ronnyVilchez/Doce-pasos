/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        script: ["Pinyon Script", "cursive"],
        poppins: ["Poppins", "serif"],
        Kanit: ["Kanit", "sans-serif"],
       Roboto: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}