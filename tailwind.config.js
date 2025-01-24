/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        midnight: "#000",
        customGray: '#CECECE',
        linkTop: '#555252',
        footerColor:"#F6F6F8",
        customPink:'#fa6bff',
        customBlue:'#2188FF',
        customGreen:'#34D399',
        customYellow:'#F9C23C',
        customRed:'#F8312F',
        customPurple:'#a749ff',
        customOrange:'#FF9F43',
        customTeal:'#27AE60',
        customBrown:'#8B4513',
        customCyan:'#17A2B8',
        customHearthstone:'#929292',
      },
      fontFamily: {
        poppins: ["Poppins", "serif"]
      },
    },
  },
  plugins: [],
}