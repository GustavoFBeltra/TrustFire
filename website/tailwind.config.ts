import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f0413f',
          dark: '#1b1c1c',
        },
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'rgb(var(--card) / <alpha-value>)',
          foreground: 'rgb(var(--card-foreground) / <alpha-value>)',
        },
        muted: 'rgb(var(--muted) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
      },
      boxShadow: {
        // Elevation hierarchy shadows
        'elevation-1': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'elevation-2': '0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevation-3': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevation-4': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elevation-5': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'elevation-6': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

        // Dark mode elevation shadows
        'elevation-1-dark': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        'elevation-2-dark': '0 2px 4px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
        'elevation-3-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
        'elevation-4-dark': '0 10px 15px -3px rgba(0, 0, 0, 0.6), 0 4px 6px -2px rgba(0, 0, 0, 0.4)',
        'elevation-5-dark': '0 20px 25px -5px rgba(0, 0, 0, 0.7), 0 10px 10px -5px rgba(0, 0, 0, 0.5)',
        'elevation-6-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',

        // Inset shadows for recessed elements
        'inset-1': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'inset-2': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'inset-dark': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',

        // Primary color glows
        'glow-sm': '0 0 10px rgba(240, 65, 63, 0.3)',
        'glow-md': '0 0 20px rgba(240, 65, 63, 0.4)',
        'glow-lg': '0 0 30px rgba(240, 65, 63, 0.5)',
      },
      fontSize: {
        // Typography scale with proper line heights and letter spacing
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.01em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '3.25rem', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '4rem', letterSpacing: '-0.02em' }],
        '7xl': ['4.5rem', { lineHeight: '4.75rem', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '6.25rem', letterSpacing: '-0.03em' }],
        '9xl': ['8rem', { lineHeight: '8.25rem', letterSpacing: '-0.04em' }],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
    },
  },
  plugins: [],
} satisfies Config;
