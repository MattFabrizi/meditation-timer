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
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-image": "url('/bg_temp.jpg')",
      },
      colors: {
        'primary': '#454897',
        'secondary': '#f7687a',
        'accent': '#d3f49b'
      },
      fontSize: {
        'big-clamp': 'clamp(4rem, 1rem + 20vw, 20rem)',
        'small-clamp': 'clamp(4rem, 1rem + 10vw, 8rem)'
      },
    },
  },
  plugins: [],
};
export default config;
