import type { Config } from "tailwindcss";

const config: Config = {
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
        red: "#F58840",
        purple: "#9283e0",
        orange: "#FFA599",
        yellow: "#FFD581",
        violet: "#FE90EC",
        blue: "#27aeff",
        green: "#00DC90",
        // background: "#001524",
        background: "#1A1A2E",
        // background: "#1C1C1C",
        // background: "#2C0F02",
        black: "#0C0C0C",
        white: "#F6F5F2",

        error: "#E11D48",
        sucess: "#059669",
      },
      fontFamily: {
        "Open-Sans": ["Open Sans", "sans-serif"],
        "Poppins": ["Poppins", "sans-serif"],
        "Source-Sans-Pro": ["Source Sans 3", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
