/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maingray: '#EFF1F6',
        secGray: '#56616B',
        borderGray: '#EFF1F6',
        lightGray: '#EFF1F6',
      },
    },
  },
  plugins: [],
};
