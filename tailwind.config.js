/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#313866',
        secondary: '#BF0CF0',
        contrastLight: '#F3CCF3',
        textDark: '#FFFFFF',
        textGrey: '#9e9dab',
      },
      fontFamily: {
        serif: ['"Noto Serif"', 'serif'],
        sans: ['Roboto', 'sans-serif'],
      },
      screens: {
        mobile: '768px',
        tablet: '992px',
        desktop: '1600px',
      },
    },
  },
  plugins: [],
}

