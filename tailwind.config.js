/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1440px',
      },
      colors: {
        'primaryLight': '#D0D6F9',
        'secondaryDark': '#0B0D17',
      },
    },
  },
  plugins: [],
}

