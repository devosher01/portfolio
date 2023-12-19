/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'text-shadow': '0 2px 5px rgba(0, 0, 0, 0.5)',
      },
      width: {
        '388': '388px',
      },
      height: {
        '240': '240px',
      },
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
        'light-gray': '#999999',
        'lighter-gray': '#e6e6e6',
        'bg-container': '#0F0F0F',
        "skill-container": "#1a1a1a",
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}

