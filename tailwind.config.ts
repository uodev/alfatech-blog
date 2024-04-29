import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/partials/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //Light Mode
        passive: "#9B9B9B",
        quote: "#9283e0",
        hover: "#FF5480",
        red: "#FF5480",
        purple: "#9283e0",
        orange: "#FFA599",
        yellow: "#FFD581",
        violet: "#FE90EC",
        blue: "#27aeff",
        green: "#00DC90",
        background: "#f9f9fb",
        black: "#0C0C0C",
        //Dark Mode
        "dark-passive": "#9B9B9B",
        "dark-quote": "#9283e0",
        "dark-hover": "#FF5480",
        "dark-red": "#FF5480",
        "dark-purple": "#9283e0",
        "dark-orange": "#FFA599",
        "dark-yellow": "#FFD581",
        "dark-violet": "#FE90EC",
        "dark-blue": "#27aeff",
        "dark-green": "#00DC90",
        "dark-background": "#0F0F0F",
        white: "#F6F5F2",

        error: "#E11D48",
        sucess: "#059669",
      },
      fontFamily: {
        "Open-Sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
