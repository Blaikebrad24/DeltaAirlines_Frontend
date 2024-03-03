import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'deltaBlue': '#11172a',
      'testPink': '#6e0b5a',
      'testOrange': '#b86507',
      'testBlue': '#070db8',
      'testGreen': '#16b807',
      'tealBlue': '#07a6b8',
      'deltaRed': '#e51937',
      'borderGray': '#dedcdc',
      'toothWhite': '#fcfcfc'

    },
  },
  plugins: [],
};
export default config;
