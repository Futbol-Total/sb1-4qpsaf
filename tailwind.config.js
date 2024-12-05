/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        float: 'float 5s ease-in forwards',
        twinkle: 'twinkle 3s ease-in-out infinite',
        gradient: 'gradient 15s ease infinite',
        fadeIn: 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translateY(100vh) rotate(0deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100px) rotate(360deg)',
            opacity: '0',
          },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};