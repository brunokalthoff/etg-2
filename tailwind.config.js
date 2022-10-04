/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow1: "var(--yellow1)",
        yellow2: "var(--yellow2)",
        yellow3: "var(--yellow3)",
        yellow4: "var(--yellow4)",
        yellow5: "var(--yellow5)",
        yellow6: "var(--yellow6)",

        green1: "var(--green1)",
        green2: "var(--green2)",
        green3: "var(--green3)",
        green4: "var(--green4)",
        green5: "var(--green5)",
        green6: "var(--green6)",

        teal1: "var(--teal1)",
        teal2: "var(--teal2)",
        teal3: "var(--teal3)",
        teal4: "var(--teal4)",
        teal5: "var(--teal5)",
        teal6: "var(--teal6)",

        purple1: "var(--purple1)",
        purple2: "var(--purple2)",
        purple3: "var(--purple3)",
        purple4: "var(--purple4)",
        purple5: "var(--purple5)",
        purple6: "var(--purple6)",

        magenta1: "var(--magenta1)",
        magenta2: "var(--magenta2)",
        magenta3: "var(--magenta3)",
        magenta4: "var(--magenta4)",
        magenta5: "var(--magenta5)",
        magenta6: "var(--magenta6)",

        white: "var(--white)",
        grey1: "var(--grey1)",
        grey2: "var(--grey2)",
        black: "var(--black)",

        "neutral-rwhite": "var(--neutral-rwhite)",
        "neutral-grey1": "var(--neutral-grey1)",
        "neutral-grey2": "var(--neutral-grey2)",
        "neutral-black": "var(--neutral-black)",
        "neutral-rblack": "var(--neutral-rblack)",
      },
    },
  },
  plugins: [],
};
