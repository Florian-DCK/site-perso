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
        background: "#18171f",
        foreground: "var(--foreground)",
        primary: "#2d2c36",
        secondary: "#373642",
        accent: "#fdb93a",
      },
    },
  },
  plugins: [],
};
export default config;
