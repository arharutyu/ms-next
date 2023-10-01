/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: { 
        'deep_sky_blue': { DEFAULT: '#30c5ff', 100: '#002b3c', 200: '#005678', 300: '#0081b5', 400: '#00adf1', 500: '#30c5ff', 600: '#58d0ff', 700: '#82dbff', 800: '#abe7ff', 900: '#d5f3ff' }, 
        'gunmetal': { DEFAULT: '#2a2d34', 100: '#08090a', 200: '#101214', 300: '#191a1f', 400: '#212329', 500: '#2a2d34', 600: '#4e5461', 700: '#747c8f', 800: '#a2a8b5', 900: '#d1d3da' }, 
        'sea_green': { DEFAULT: '#5c946e', 100: '#121d16', 200: '#253b2c', 300: '#375842', 400: '#4a7658', 500: '#5c946e', 600: '#7aac8a', 700: '#9bc1a7', 800: '#bdd5c4', 900: '#deeae2' }, 
        'cambridge_blue': { DEFAULT: '#80c2af', 100: '#152b25', 200: '#2a574a', 300: '#3f826f', 400: '#54ad94', 500: '#80c2af', 600: '#99cebf', 700: '#b3dacf', 800: '#cce6df', 900: '#e6f3ef' }, 
        'non_photo_blue': { DEFAULT: '#a0dde6', 100: '#10373d', 200: '#216e7a', 300: '#31a6b8', 400: '#61c6d5', 500: '#a0dde6', 600: '#b2e3ea', 700: '#c5eaf0', 800: '#d8f1f5', 900: '#ecf8fa' } 
      },

    },
  },
  plugins: [],
}
