/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
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
      fontFamily: {
        roboto: [
          "Roboto",
          "ui-sans-serif",
          "ui-sans-serif, system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
        merriweather: [
          "Merriweather",
          "ui-sans-serif",
          "ui-sans-serif, system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
        inter: [
          "Inter",
          "ui-sans-serif",
          "ui-sans-serif, system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
      },
    },
  },
  plugins: [],
};
