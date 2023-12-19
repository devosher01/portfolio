/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '14': '14px',
      },
      fontFamily: {
        'bai-jamjuree': ['Bai Jamjuree', 'sans-serif'],
      },
      colors: {
        'primary': '#0B0C10',
        'secondary': '#1F2833',
        'tertiary': '#45A29E',
        'quaternary': '#66FCF1',
        'quinary': '#C5C6C7',
        'name': '#AC99FF',
      },
    },
  },
  plugins: [],
}

