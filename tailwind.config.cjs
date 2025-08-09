/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        gold: '#d4af37'
      },
      fontFamily: {
        gotham: ['Gotham', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
