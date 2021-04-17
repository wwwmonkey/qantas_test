module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '1/5': '20%',
        '1/2': '50%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
