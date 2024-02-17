/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primaryColor: "#f542ef",
        headingColor: "#0d0a0d",
        smallTextColor:"#050305",
      }
    },
  },
  plugins: [],
}

