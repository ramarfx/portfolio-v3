/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#94a3b8',
        dark: '#0f172a',
        secondaryDark: '#15213B',
        lightDark: {
          100: '#283e71',
          200: '#1c2c50',
          300: '#283e71',
        }

      },
      screens: {
        '2xl': '1320'
      }
    },
    fontFamily: {
      poppins: ['poppins']
    },
  },
  plugins: [


  ],
}

