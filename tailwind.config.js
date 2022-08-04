module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        97: "38.3125rem",
      },
      screens: {
        sm: "0px",
        md: "768px",
        lg: "1024px",
        xlg: "1440px",
      },
    },
  },

  plugins: [],
};
