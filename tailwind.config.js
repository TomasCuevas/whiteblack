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
        dark: "#07060e",
        light: "#1d1839",
        purple: "#7c53bd",
      },
      screens: {
        xs: "500px",
        mdx: "900px",
      },
    },
  },
  plugins: [],
};
