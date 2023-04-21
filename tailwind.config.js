/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgimage': "url('../imgs/backgroundimg.jpg')"
      },
      backgroundColor:{
        'menubgcolor': 'rgba(36, 36, 36, 0.555)',
        'sectionbgcolor': 'rgba(36, 36, 36, 0.911)'
      },
      fontFamily: {
        'sans': ['var(--font-montserrat)'],
      },
      fontSize:{
        'xl': '2.5rem',
        'aboutsize': '1.2rem'
      },
      fontWeight:{
        'font-thin': '10',
      },
      textColor:{
        'hoverpurple': '#777BD3',
        'linkblue': '#6996E4'
      },
    },
  },
  plugins: [],
}