const textShadow = "tailwindcss-textshadow";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins"]
      }
    }
  },
  plugins: [require(textShadow)]
};
