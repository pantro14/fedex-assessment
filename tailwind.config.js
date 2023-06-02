/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'fedex-blue': '#4D148C',
        'fedex-orange': '#FF6200'
      }
    },
    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif']
    },
  },
  plugins: [],
}

