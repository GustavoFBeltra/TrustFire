import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f0413f',
          dark: '#1b1c1c',
        },
        background: {
          light: '#f9f9f9',
          dark: '#1b1c1c',
          'dark-alt': '#2a2b2b',
        },
        text: {
          primary: '#1b1c1c',
          'primary-dark': '#ffffff',
          secondary: '#6c6c6c',
          'secondary-dark': '#6c6c6c',
          disabled: '#a5a5a5',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
