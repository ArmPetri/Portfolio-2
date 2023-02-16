/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        'title': ['54px', '70px'],
        'text': ['18px', '27px']
      },
      boxShadow: {
        'myShadow': '4px 4px 0 0 rgba(0, 0, 0, 1)',
        'hoverShadow': '4px 4px 0 0 rgba(55,55,55, 0.8)',
      }
    },
  },
  plugins: [],
}
