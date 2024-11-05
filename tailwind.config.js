/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      },
      spacing:{
        "big": "48rem"
      }
    },
  },
  plugins: [],
}


