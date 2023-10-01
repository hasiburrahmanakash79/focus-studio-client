/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        theme: {

        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      customLightTheme: {
        color: '#131111',
        background: '#ebeaea',
        primary: '#959d9b',
        secondary: '#cfd0d3',
        accent: '#676f6d',
      },
      customDarkTheme: {
        color: '#eeecec',
        background: '#151414',
        primary: '#626a68',
        secondary: '#2c2d30',
        accent: '#909896',
      },
    }]
  },
}

