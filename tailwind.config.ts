import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#050811",
          "dark-alt": "#080D17",
          light: "#fafafc",
        },
        surface: {
          dark: "#0a0f1d",
          "dark-subtle": "#10172a",
          light: "#ffffff",
          "light-subtle": "#f3f4f8",
        },
        gold: {
          300: "#FFE082",
          400: "#FFD54F",
          500: "#FFC229",
          600: "#FFB300",
          700: "#FFA000",
        },
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#FFC229", // Primary gold
          600: "#FF9D27", // Warm amber
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        script: ["var(--font-script)", "Caveat", "cursive"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        "glow-amber": "0 0 35px -5px rgba(255, 194, 41, 0.28)",
        "glow-gold": "0 0 45px -5px rgba(255, 194, 41, 0.35)",
        "glow-subtle": "0 0 25px -5px rgba(255, 157, 39, 0.16)",
        "card-gold": "0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 0 20px -2px rgba(255, 180, 40, 0.12)",
        "card-gold-hover": "0 15px 35px -10px rgba(0, 0, 0, 0.7), 0 0 30px -2px rgba(255, 194, 41, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
