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
          dark: "#090a0f",
          light: "#fafafc",
        },
        surface: {
          dark: "#11141e",
          "dark-subtle": "#171b28",
          light: "#ffffff",
          "light-subtle": "#f3f4f8",
        },
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-amber": "0 0 35px -5px rgba(245, 158, 11, 0.25)",
        "glow-subtle": "0 0 25px -5px rgba(245, 158, 11, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
