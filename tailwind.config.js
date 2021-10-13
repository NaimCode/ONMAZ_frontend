module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        bottomOp1: "bottomOp1 1.5s forwards",
        bottomOp2: "bottomOp2 2s forwards",
        leftOp1: "leftOp1 1.5s forwards",
        leftOp2: "leftOp2 2s forwards",
        rightOp1: "rightOp1 1.5s forwards",
        rightOp2: "rightOp2 2s forwards",
      },
      keyframes: {
        bottomOp1: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        bottomOp2: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "20%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        leftOp1: {
          from: {
            opacity: "0",
            transform: "translateY(-40px)",
          },

          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        leftOp2: {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "20%": {
            opacity: "0",
            transform: "translateX(-40px)",
          },

          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        rightOp2: {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "20%": {
            opacity: "0",
            transform: "translateX(40px)",
          },

          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        rightOp1: {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },

          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
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
