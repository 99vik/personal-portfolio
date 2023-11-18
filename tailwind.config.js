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
        light2: {
          '0%': {
            opacity: '15%',
            transform: 'translate(-50%, -50%)',
          },
          '25%': {
            opacity: '20%',
            transform: 'translate(-40%, -42.5%)',
          },
          '50%': {
            opacity: '25%',
            transform: 'translate(-50%, -42.5%)',
          },
          '75%': {
            opacity: '20%',
            transform: 'translate(-60%, -55%)',
          },
          '100%': {
            opacity: '15%',
            transform: 'translate(-50%, -50%)',
          },
        },
        light3: {
          '0%': {
            opacity: '15%',
            transform: 'translate(50%, 50%)',
          },
          '25%': {
            opacity: '20%',
            transform: 'translate(60%, 60%)',
          },
          '50%': {
            opacity: '25%',
            transform: 'translate(65%, 60%)',
          },
          '75%': {
            opacity: '20%',
            transform: 'translate(60%, 65%)',
          },
          '100%': {
            opacity: '15%',
            transform: 'translate(50%, 50%)',
          },
        },
      },
      animation: {
        blinking: 'blink 1s cubic-bezier(1.000, -0.600, 0.000, 1.650) infinite',
        bgLight: 'light 15s infinite alternate',
        bgLight2: 'light2 15s infinite alternate',
        bgLight3: 'light3 10s infinite alternate',
      },
    },
  },
  plugins: [],
};
