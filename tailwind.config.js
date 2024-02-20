/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}

