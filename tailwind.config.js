/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html",
"./src/*.{js,jsx}"],
  theme: {
    extend: {
      animation : {
        "loop-scroll-left" : "loop-scroll-left 50s linear infinite",
        "loop-scroll-right" : "loop-scroll-right 50s linear infinite",
      },
      keyframes:{
        "loop-scroll-left" : {
          from : { transform : "translateX(0)"},
          to : {transform : "translateX(-100%)"}
        },
        "loop-scroll-right" : {
          from : { transform : "translateX(-100%)"},
          to : {transform : "translateX(0)"}
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/aspect-ratio'),
],
}

