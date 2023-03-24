/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: "#6AB8F7",
          light: '#3AA1F3',
          DEFAULT: '#0F8AEB',
          dark: "#0D6EBA",
          darker: "#0B528A"
        }
      }
    },
  },
  plugins: [],
}
