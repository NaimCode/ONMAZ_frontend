module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        "2xl-full": "0 0 15px -3px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        logo: ["Corben", "cursive"],
        title: ["Gowun Batang", "serif"],
        body: ["Karla", "sans - serif"],
      },
      colors: {
        primary: "#56B2E7",
        secondary: "#BB8E33",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
