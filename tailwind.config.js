/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
        "tds-1": "#CDFFFF",
        "tds-2": "#99CCFE",
        "tds-3": "#1997D9",
        "tds-4": "#5F53FF",
        "tds-5": "#98CC00",
        "tds-6": "#838200",
        "tds-7": "#9A2D00",
      },
    },
  },
  plugins: [],
};
