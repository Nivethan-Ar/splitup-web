const textShadow = "tailwindcss-textshadow";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fade 2.5s ease-in",
        bgFade: "fade 2.0s ease-in"
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "100"
          }
        }
      },
      fontFamily: {
        poppins: ["poppins"]
      }
    }
  },
  plugins: [require(textShadow)]
};
