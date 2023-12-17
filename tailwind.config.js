/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    './*html'
  ],
  theme: {
    extend: {
      boxShadow:{
        'custom-shadow': 'inset 1px 1px 60px rgba(0, 0, 0, .05), inset 1px 1px 3px rgba(0, 0, 0, .1), inset -1px -1px 3px rgba(0, 0, 0, .1), inset -1px -1px 3px rgba(0, 0, 0, .1)',
      },
      colors:{
        'Azul-Conmebol':'#143C7B',
        'Azul-Noche':'#00132d',
      },
      fontFamily:{
        nerko: ['Nerko One'],
        ubuntu:['Ubuntu'],
      }
    },
  },
  plugins: [],
}

