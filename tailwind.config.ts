import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/partials/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Open-Sans": ["Open Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        "Source-Sans-Pro": ["Source Sans 3", "sans-serif"],
      },
    },
  },
  plugins: [
    createThemes({
      hallowen: {
        "background-color": "#18181A",
        "text-color": "#5e32ba",
        "primary-color": "#eb6123",
        passive: "#bfda7a",
        accent: "#96c457",
      },
      christmas: {
        "background-color": "#2E3254",
        "text-color": "#46B9B3",
        "primary-color": "#225D4B",
        passive: "#235A87",
        accent: "#D61918",
      },
      dark: {
        "background-color": "#1A1A2E",
        "text-color": "#910A67",
        "primary-color": "rgba(165, 163, 175, 0.4)",
        passive: "#9B9B9B",
        accent: "#F58840",
      },
      winter: {
        "background-color": "#3B6978",
        "text-color": "#E7DFD5",
        "primary-color": "#204051",
        passive: "#84A9AC",
        accent: "#204051",
      },
      summer: {
        "background-color": "#FFBB70",
        "text-color": "#FFEC9E",
        "primary-color": "#ED9455",
        passive: "#FFFBDA",
        accent: "#ED9455",
      },
      party: {
        "background-color": "#A555EC",
        "text-color": "#7E2553",
        "primary-color": "#FFBB64",
        passive: "#F8F988",
        accent: "#FF004D",
      },
    }),
  ],
};
export default config;
