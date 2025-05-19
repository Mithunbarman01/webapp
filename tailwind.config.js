/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6347', // Example primary color (Tomato)
        secondary: '#4682B4', // Example secondary color (SteelBlue)
        accent: '#32CD32', // Example accent color (LimeGreen)
        neutral: '#F5F5DC', // Example neutral color (Beige)
        'base-100': '#FFFFFF', // Example base color (White)
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};