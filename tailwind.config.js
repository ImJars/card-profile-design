import { text } from 'framer-motion/client';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_primary: '#0E4EA7',
        bg_secondary: '#0EC8CA',
        bg_card: '#110F13',
        text_primary: '#FEFEFE',
        text_secondary: '#9F9CA1',
        text_tertiary: '#565358',
      },
    },
  },
  plugins: [],
}