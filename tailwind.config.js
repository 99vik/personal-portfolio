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
      },
      animation: {
        blinking: 'blink 1s cubic-bezier(1.000, -0.600, 0.000, 1.650) infinite',
      },
    },
  },
  plugins: [],
};
