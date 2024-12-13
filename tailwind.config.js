/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'raisin-black': '#1D1820',
        'mountbatten-pink': '#A57A8E',
        'mint-green': '#BFDFDB',
        'english-violet': '#3E3746',
      },
      backgroundImage: {
        'nature': "url('./assets/backdrop.jpg')",
      }
    },
  },
  plugins: [],
}

