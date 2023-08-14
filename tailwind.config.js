/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'dark-light': '#111111',
      },
      colors: {
        'green-light': '#78CA5C',
        'dark-light': '#111111',
      },
      fontSize: {
        's1-xl': '20px',
      },
      margin: {
        'top-header': '60px 0px 0px 0px',
      },
      height: {
        line: '1px',
        form: '412px',
      },
      borderRadius: {
        form: '30px 0 30px 0',
      },
    },
  },
  plugins: [],
}
