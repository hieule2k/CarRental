/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['webfont', 'sans-serif'],
      },
      boxShadow: {
        primeShadow:
          'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
      },

      colors: {
        softBlack: '#232323',
        white: '#ffffff',
        gray: '#afb1c1',
        red: '#f33f3f',
        textBlue: '#0ea5e9',
        textHighlight: '#FF0000',
        borderBarelyVisible: '#eee',
        lightGreenBlue: '#55efc4',
      },

      keyframes: {
        slider: {
          '0%': { opacity: '40' },
          '100%': { opacity: '100' },
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        slider: 'slider 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
