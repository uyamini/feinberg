/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [],
  theme: {
    extend: {
      container: {
        center: true,
      },
      tableLayout: {
        'auto': 'auto',
        'fixed': 'fixed',
      },
      colors: {
        'gray-100': '#f7fafc',
        'gray-200': '#edf2f7',
      },
      backgroundColor: {
        'purple-custom': '#6D28D9', // Define your custom color here
      },
    },
  },
  plugins: [],
}
