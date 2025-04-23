/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
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
        'navy': '#0a1118',
        'gold-light': 'rgb(200, 173, 118)',
        'off-white': '#f2f2f2',
        'gold': 'rgb(180, 145, 70)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}; 