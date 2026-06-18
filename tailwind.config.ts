import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A1E3F",
        "navy-mid": "#122952",
        "navy-light": "#1e3a8a",
        gold: "#C5A059",
        "gold-light": "#d4b578",
        "gold-pale": "#f5ecd8",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
