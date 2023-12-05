/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#09371f',
        secondary: '#e66439',
        border: '#D9E6DF',
        fg: '#F1F5F3'
      }
    }
  },
  plugins: []
};
