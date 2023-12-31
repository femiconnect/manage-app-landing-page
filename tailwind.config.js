/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{html,js}'],
   theme: {
      screens: {
         sm: '480px', // => @media (min-width: 480px) { ... }
         md: '768px', // => @media (min-width: 768px) { ... }
         lg: '1024px', // => @media (min-width: 1024px) { ... }
         xl: '1280px', // => @media (min-width: 1280px) { ... }
         '2xl': '1440px', // => @media (min-width: 1440px) { ... }
      },
      container: {
         center: true,
         padding: {
            DEFAULT: '1rem',
            md: '1.5rem',
            lg: '3.5rem',
            xl: '6rem',
         },
      },
      extend: {
         colors: {
            brightRed: 'hsl(12, 88%, 59%)',
            brightRedLight: 'hsl(12, 88%, 69%)',
            brightRedSupLight: 'hsl(12, 88%, 95%)',
            darkBlue: 'hsl(228, 39%, 23%)',
            darkGrayishBlue: 'hsl(229,7%,43%)',
            veryDarkBlue: 'hsl(229,39%,19%)',
            veryPaleRed: 'hsl(13, 100%, 96%)',
            veryLightGray: 'hsl(0, 0%, 98%)',
         },

         backgroundImage: {
            capsule: "url('./assets/images/bg-tablet-pattern.svg')",
            ctaBgLarge:
               "url('./assets/images/bg-simplify-section-desktop.svg')",
            ctaBgMobile:
               "url('./assets/images/bg-simplify-section-mobile.svg')",
         },
      },
   },
   plugins: [],
};
