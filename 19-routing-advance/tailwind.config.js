/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'arm-anima': {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(-360deg)' }
        },
        'head-anima': {
          '0%, 100%, 42%': { top: '25px' },
          '45%': { top: '50px' }
        },
        'eye-anima': {
          '0%, 100%, 42%': { height: '5px' },
          '45%': { height: '1px' }
        },
        'shadow-anima': {
          '0%, 50%, 100%': { width: '350px', left: '80px' },
          '25%': { width: '450px', left: '80px' },
          '75%': { width: '450px', left: '0px' }
        }
      }
    },
  },
  plugins: [],
}