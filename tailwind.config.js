/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fvhr: ["fvhr", "sans-serif"],
      },
      colors: {
        "color-bg": "var(--color-bg)",
        "color-primary": "var(--color-primary)",
      },
    },
    screens: {
      xs: "320px",
      md: "768px",
      xl: "1400px",
    },
  },
  plugins: [],
};
