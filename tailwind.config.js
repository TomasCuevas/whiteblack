/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        purple: "#9f53fd",
        darklight: "#141f27",
      },
      screens: {
        xs: "500px",
        mdx: "900px",
        sidebar: "1080px",
        lgx: "1170px",
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
