/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './index.html',
      './src/App.jsx',
      './src/components/*.{js,jsx,ts,tsx}',
      './src/views/*.{js,jsx,ts,tsx}',
      './src/utils/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

