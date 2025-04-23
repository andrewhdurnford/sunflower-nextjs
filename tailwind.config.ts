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
      t2xl: ['72px', '72px'],
      txl: ['64px', '64px'],
      tlg: ['56px', '56px'],
      tmd: ['48px', '48px'],
      tsm: ['36px', '36px'],
      b2xl: ['84px', '126px'],
      bxl: ['64px', '96px'],
      bxlg: ['46px', '69px'],
      blg: ['36px', '54px'],
      bmd: ['32px', '48px'],
      bsm: ['28px', '42px'],
      bxsm: ['26px', '39px'],
      bxs: ['24px', '36px'],
      b2xs: ['20px', '30px'],
      b3xs: ['18px', '27px'],
      b34xs: ['16px', '24px'],
      b4xs: ['14px', '21px'],
      b5xs: ['12px', '18px'],
    },
    lineHeight: {
      'sm': '1',
      'md': '1.5',
      'lg': '2',
      'xl': '2.5',
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
      '2xs': '375px',
      'xs': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '1920px',
    },
  },
  plugins: [],
}

