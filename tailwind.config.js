/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      colors : {
        customColor: '#2b7786',
        footerColor : '#d9f3f4'
      }
    },
  },

  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
  ],
}

