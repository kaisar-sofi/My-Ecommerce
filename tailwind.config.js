/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
            'smm': '450px',
            // => @media (min-width: 640px) { ... }
          }
    },
  },
  // theme: {
  //   screens: {
  //     'smm': '400px',
  //     // => @media (min-width: 640px) { ... }
  //   }
  // },
  plugins: [],
}

