/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '50%': {
            opacity: '0%',
          },
        },
        light: {
          '0%': {
            opacity: '15%',
            transform: 'translate(70%, -50%)',
          },
          '25%': {
            opacity: '20%',
            transform: 'translate(65%, -42.5%)',
          },
          '50%': {
            opacity: '25%',
            transform: 'translate(65%, -42.5%)',
          },
          '75%': {
            opacity: '20%',
            transform: 'translate(60%, -55%)',
          },
          '100%': {
            opacity: '15%',
            transform: 'translate(70%, -50%)',
          },
        },
      },
      animation: {
        blinking: 'blink 1s cubic-bezier(1.000, -0.600, 0.000, 1.650) infinite',
        bgLight: 'light 15s infinite alternate',
      },
    },
  },
  plugins: [],
};
