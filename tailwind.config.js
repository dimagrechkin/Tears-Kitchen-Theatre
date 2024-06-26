/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lorin"', 'Helvetica'],
        body: ['"-apple-system"'],
        lorin: ['Lorin', 'sans-serif'],
      },
      colors: {
        'custom-gray': '#292929',
        'custom-light-gray': '#A6A6A6',
        'custom-black': '#0E0E0E',
        'custom-yellow': '#FFE81F',
        'custom-dark-yellow': '#9F910F',
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
}
