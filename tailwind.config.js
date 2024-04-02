/** @type {import('tailwindcss').Config} */
export const content = ["./**/*.{html,js}"];
export const theme = {
  extend: {},
  screens: {
    'sm': { min: "400px", max: "640px" },

    'md': { min: "641px", max: "1080px" },

    'lg': { min: "1081px", max: "1280px" },

    'xl': { min: "1281px", max: "1535px" },

    '2xl': { min: "1536px", max: "2800px" },
  },
  plugins: [],
};
