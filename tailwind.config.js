// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       extend: {
//         theme: {

//         },
//       },
//     },
//   },
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: [{
//       customLightTheme: {
//         color: '#111111',
//         background: '#ffffff',
//         primary: '#1A0072',
//         secondary: '#e0d1d2',
//         accent: '#7E89A5',
//       },
//       customDarkTheme: {
//         color: '#ffffff',
//         background: '#081221',
//         primary: '#ACBD0E',
//         secondary: '#e0d1d2',
//         accent: '#7E89A5',
//       },
//     }]
//   },
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      customLightTheme: {
        color: '#111111',
        background: '#ffffff',
        primary: '#1A0072',
        secondary: '#e0d1d2',
        accent: '#7E89A5',
        textColor: '#111111', // Define text color for light theme
      },
      customDarkTheme: {
        color: '#ffffff',
        background: '#081221',
        primary: '#ACBD0E',
        secondary: '#e0d1d2',
        accent: '#7E89A5',
        textColor: '#ffffff', // Define text color for dark theme
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      customLightTheme: {
        color: '#111111',
        background: '#ffffff',
        primary: '#1A0072',
        secondary: '#e0d1d2',
        accent: '#f0f0f0',
      },
      customDarkTheme: {
        color: '#ffffff',
        background: '#081221',
        primary: '#ACBD0E',
        secondary: '#e0d1d2',
        accent: '#343434',
      },
    }]
  },
}


