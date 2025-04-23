/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust the paths according to your project structure
    './public/index.html',
  ],
  theme: {
    fontFamily: {
      'arya': ['Arya', 'system-ui'],
      'bitter': ['Bitter', 'system-ui'],
      'bitter-italic': ['Bitter-italic', 'system-ui']
    },
    fontSize: {
      tlg: ['64px', '64px'],
      tmd: ['48px', '48px'],
      tsm: ['36px', '36px'],
      bxl: ['84px', '126px'],
      blg: ['36px', '54px'],
      bmd: ['32px', '48px'],
      bsm: ['28px', '42px'],
      bxs: ['24px', '36px'],
      b2xs: ['18px', '27px'],
    },
    lineHeight: {
      'sm': '1',
      'md': '1.5',
      'lg': '2',
      'xl': '2.5',
      '12': '3rem',
    },
    colors: {
      'offwhite': '#FFF9DE',
      'offblack': '#010101',
      'dark-brown': '#4F3A26',
      'dark-green': '#03351A',
      'white': '#FFFFFF',
      'darkish-brown': '#704F38',
      'light-grey': '#B9A89A',
    },
    extend: {
      animation: {
        'spin': 'spin 3s linear infinite',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      lineHeight: {
        'extra-loose': '2.5',
      }
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '1920px',
    },
  },
  plugins: [],
}

