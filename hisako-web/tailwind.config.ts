import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { brand: '#00311F' },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      borderRadius: { DEFAULT: '0.625rem' }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
