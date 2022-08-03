/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    letterSpacing: {
      '1': '0em',
      '2': '0.025em',
      '3': '0.05em',
      '4': '0.1em',
    },
    fontFamily:{
      'kumbh' :['Kumbh Sans', 'sans-serif']
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsla(12, 88%, 69%,60%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        grey : 'hsl(0, 0%, 60%)',
        lightGrey : 'hsl(0, 0%, 90%)',
      },
    },
  },
  plugins: [],
}
