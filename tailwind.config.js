/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#070B12",
          surface: "#0D1424",
          card: "#111B30",
          cardHover: "#16223D",
          border: "#1E2C4A",
          borderHighlight: "#2E416B",
        },
        emerald: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          glow: "rgba(16, 185, 129, 0.15)",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      minHeight: {
        "screen-safe": "calc(100vh - 4rem)",
      },
    },
  },
  plugins: [],
};
