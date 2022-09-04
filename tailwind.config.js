/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {
      colors: {
        primary: "hsl(231, 69%, 60%)",
        heading: "hsl(229, 31%, 21%)",
        red: {
          400: "hsl(0, 94%, 66%)",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeLeft: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
      },
    },
    animation: {
      fadeIn: "fadeIn 1s ease-in-out",
      fadeLeft: "fadeLeft 1s ease-in-out",
    },
    backgroundImage: {
      "dot-pattern": "url('../public/images/bg-dots.svg')",
      "error-img": "url('../public/images/icon-error.svg')",
    },
  },
  plugins: [],
};
