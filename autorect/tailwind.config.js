/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        blacky:'#2FG78H'
      }
    }
  },
  plugins: [require('flowbite/plugin'),],
}

