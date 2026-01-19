import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "vida-loca": "#3e9d1e",
        "cod-gray": "#161616",
        "desert-storm": "#f2f3f1",
        boulder: "#7c7c7c",
        "chelsea-cucumber": "#7fb46a",
        sprout: "#c0deb3",
        tundora: "#424242",
        nobel: "#b4b4b4",
        primary: "#3e9d1e",
        background: "#f2f3f1",
        foreground: "#161616",
        muted: "#7c7c7c",
        "muted-foreground": "#7c7c7c",
        card: "#ffffff",
        "card-foreground": "#161616",
        border: "#c0deb3",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
