/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar'
import tailwindcssMotion from 'tailwindcss-motion' // Import should be tailwindcssMotion
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [tailwindScrollbar, tailwindcssMotion], // Add tailwindcssMotion here
}
