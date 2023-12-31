/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway' : ['Raleway', 'sans-serif' ],
      },
      fontWeight: {
        medium: '400',
        regular: '500',
        'semi-bold': '600',
        bold: '700'
      },
      backgroundImage:{
        'pattern': "url('/backgroundPattern.svg')",
      }
    },
    colors: {
      text: "#000000",
      accent: "#CB2B28",
      gray: "#E5E5E7",
      'dark-gray': "#9C9C9C",
      white: "#FFFFFF",
      offwhite: "#F5F5F6",
      gradientstart: '#CFCFD0'
    }
  },
  plugins: [],
}

