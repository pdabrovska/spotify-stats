/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spotify-basic-green': 'rgb(56, 158, 56)',
      }
    },
  },
  plugins: [],
}

