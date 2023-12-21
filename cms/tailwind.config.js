/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#020202',
        secondary: '#e66439',  
        border: '#dfe2e2',
        fg: '#F9F9F9'
      }
    }
  },
  plugins: []
};
