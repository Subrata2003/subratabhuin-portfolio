/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0f172a",
        card: "#020617",
        accent: "#38bdf8",
        muted: "#94a3b8",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
