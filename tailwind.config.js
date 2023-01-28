/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#060609",
        light: "#fbf8fc",
        orange: "#e86d33",
      },
      screens: {
        xs: "500px",
        mdx: "900px",
      },
    },
  },
  plugins: [],
};
