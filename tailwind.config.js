/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#800080',
       'brand-orange':'#FF864C' ,
        'brand-text-grey':'#4D4D4D',
        'brand-icon-grey':'#D9D9D9'
      }
    },
    
  },
  plugins: [],
}
