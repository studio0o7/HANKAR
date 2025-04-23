import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        // This adds the px-6 utility and other spacing values
        '0': '0px',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        gold: 'rgb(var(--color-gold) / <alpha-value>)',
        'gold-light': 'rgb(var(--color-gold-light) / <alpha-value>)',
        'cream': 'rgb(var(--color-cream) / <alpha-value>)',
        'ivory': 'rgb(var(--color-ivory) / <alpha-value>)',
        'navy': 'rgb(var(--color-navy) / <alpha-value>)',
        'burgundy': 'rgb(var(--color-burgundy) / <alpha-value>)',
        'forest': 'rgb(var(--color-forest) / <alpha-value>)',
        'rich-brown': 'rgb(var(--color-rich-brown) / <alpha-value>)',
        'deep-red': 'rgb(var(--color-deep-red) / <alpha-value>)',
        'charcoal': 'rgb(var(--color-charcoal) / <alpha-value>)',
        'sage': 'rgb(var(--color-sage) / <alpha-value>)',
        'taupe': 'rgb(var(--color-taupe) / <alpha-value>)',
        'deep-navy': 'rgb(28, 35, 45)',
        'dark-bronze': 'rgb(45, 40, 30)',
        'dark-forest': 'rgb(30, 40, 35)',
        green: {
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },
        gray: {
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(to right, rgb(var(--color-gold)), rgb(var(--color-gold-light)))',
      },
      borderWidth: {
        '1': '1px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'gold-shimmer': 'goldShimmer 8s infinite linear',
      },
      animationDelay: {
        '200': '200ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      }
    },
  },
  plugins: [],
};

export default config; 