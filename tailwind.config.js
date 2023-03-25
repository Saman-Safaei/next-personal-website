/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: "#6AB8F7",
          light: "#3AA1F3",
          DEFAULT: "#0F8AEB",
          dark: "#0D6EBA",
          darker: "#0B528A",
        },
      },
      spacing: {
        'navbar': '4.5rem'
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "bg-move": "bg-anim 5s linear infinite",
      },
      keyframes: {
        "bg-anim": {
          "0%": { backgroundPosition: '0' },
          "100%": { backgroundPosition: '200%' },
        },
      },
    },
  },
  plugins: [],
};
