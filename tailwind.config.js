/** @type {import('tailwindcss').Config} */
 
 
module.exports = {
 
    content: ["./src/**/*.{html,js,jsx}"],
   
    corePlugins: { preflight: false },
    important: true,
    theme: {
   
      extend: {
        fontFamily: {
          sans: ['Public Sans'],
        },
        colors: {
          'primary': '#6236CC', // Main Theme Color
          'secondary': '#EEF2FF',
          'danger': '#EC2D30'
        },
        keyframes: {
          jump: {
            '0%, 100%': { transform: 'translateY(30%)' },
            '75%': { transform: 'translateY(-30%)' },
          },
        },
        animation: {
          jump: 'jump 0.5s ease-in-out',
        },
   
      },
   
    },
   
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          '.overflow-anchor-none': {
            'overflow-anchor': 'none',
          },
        });
      },
    ],
   
  }