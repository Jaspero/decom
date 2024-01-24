/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      '3xl': { max: '1920px' },
      // => @media (max-width: 1920px) { ... }

      '2xl': { max: '1625px' },
      // => @media (max-width: 1535px) { ... }

      '1xl': { max: '1445px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1341px' },
      // => @media (max-width: 1279px) { ... }

      xlg: { max: '1194px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1084px' },

      // => @media (max-width: 1023px) { ... }
      mlg: { max: '925px' },
      // => @media (max-width: 1023px) { ... }

      lgm: { max: '910px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '856px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '685px' }
      // => @media (max-width: 639px) { ... }
    },
    extend: {}
  },
  plugins: []
};
