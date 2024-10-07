/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary))",
        secondary: "rgb(var(--color-secondary))",
        background: "rgb(var(--color-background))",
        btn: "rgb(var(--color-btn), 0.153)",
        btnhover: "rgb(var(--color-btn), 0.291)",
      },
      fontFamily: {
        serif: ["Pacifico", "system-ui"],
      },
      gridTemplateColumns: {
        3: "1fr 4fr 7fr",
      },
      // gridTemplateRows: {
      //   '3': '1fr 4fr 7fr',
      // }
    },
  },
  plugins: [],
};
