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
      }
    },
    colors: {
      text: "#000000",
      accent: "#CB2B28"
    }
  },
  plugins: [],
}

