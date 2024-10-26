import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: ["Futura", '"Noto Sans JP"', "sans-serif"],
    },
    extend: {
      spacing: {
        100: "25rem",
      },
    },
  },
  plugins: [],
};
export default config;
