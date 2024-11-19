/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#32B87D',
        customDark: '#2C2D3F',
        customBlue: '#1a76d1',
        customBlueDark: "#1a1dd1"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Add Poppins as the default sans-serif font
      },
    },
  },
  plugins: [],
};
