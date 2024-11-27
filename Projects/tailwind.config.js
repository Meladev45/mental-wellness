/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'working-img':"url('src/assets/work-proceess.png')"
      },
      fontFamily:{
        'primary':['font-family: "Poppins", sans-serif;'],
        'secondary':['font-family: "Roboto", sans-serif;']
      },
      colors:{
        'heroBg':'#0e1122',
        'para':'rgb(0 0 0 /80%)',
        'primary':'#06a055',

      }
    },
  },
  plugins: [],
}

