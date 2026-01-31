export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-brand": "#FF8C00",
        "primary-green": "#2A554E",
        "light-skin": "#FDF8F2",
        "accent-gold": "#C5A47E",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
