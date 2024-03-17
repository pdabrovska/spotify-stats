/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xxs: '450px',
      xs: '520px',
      mdLG : '1000px',
      smX : '620px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        'spotify-basic-green': '#07b042',
      },
      backgroundImage: {
        'share' : "url('/public/images/shareBG.jpg')"
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
        },
        bubbleSize: {
          '0%': {
            width: 'var(--size, 4rem)',
            height: 'var(--size, 4rem)'
          },
          '75%': {
            width: 'var(--size, 4rem)',
            height: 'var(--size, 4rem)'
          },
          '100%': {
            width: '0',
            height: '0'
          },
        },
        bubbleMove: {
          '0%': {
            bottom: '0'
          },
          '100%': {
            bottom: 'var(--distance)'
          }
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.9s',
        fadeUpDelay: 'fadeUpDelay 0.9s 0.2s',
        bubbleSize: 'bubbleSize var(--time, 4s) ease-in infinite var(--delay, 0s)',
        bubbleMove: 'bubbleMove var(--time, 4s) ease-in infinite var(--delay, 0s);'
      }
    },
  },
  plugins: [],
}

