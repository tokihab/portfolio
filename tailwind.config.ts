import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgWhite: "#FFFFFF",
        offWhite: "#FCFCFA",
        beige: "#F0EFEB",
        dark: "#4A3728", // Deep, rich brown
      },
      fontFamily: {
        space: ['var(--font-space)'],
        mono: ['var(--font-mono)'],
      },
      boxShadow: {
        'brutal': '6px 6px 0px 0px #4A3728',
        'brutal-sm': '4px 4px 0px 0px #4A3728',
      }
    },
  },
  plugins: [],
};
export default config;