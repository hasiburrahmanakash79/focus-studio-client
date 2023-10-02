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
        color: '#111111',
        background: '#f0f0f0',
        primary: '#1A0072',
        secondary: '#354847',
        accent: '#676f6d',
      },
      customDarkTheme: {
        color: '#ffffff',
        background: '#081221',
        primary: '#ACBD0E',
        secondary: '#354847',
        accent: '#909896',
      },
    }]
  },
}

