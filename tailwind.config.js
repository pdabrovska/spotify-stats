/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      mdLG : '1000px',
      smX : '620px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        'spotify-basic-green': 'rgb(56, 158, 56)',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0.5',
            transform: 'translateY(-30px) scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px) scale(1)'
          }
        },
        fadeUpDelay: {
          '0%': {
            display: 'hidden',
            opacity: '0.5',
            transform: 'translateY(-30px) scale(0.9)'
          },
          '100%': {
            display: 'block',
            opacity: '1',
            transform: 'translateY(0px) scale(1)'
          }
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.9s',
        fadeUpDelay: 'fadeUpDelay 0.9s 0.2s'
      }
    },
  },
  plugins: [],
}

