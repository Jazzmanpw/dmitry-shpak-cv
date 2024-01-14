/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    colors: utils => ({
      primary: {main: '#26426e', contrast: utils.colors.white, light: '#d7e1f1'},
      text: {primary: utils.colors.gray['900'], secondary: utils.colors.gray['400']},
    }),
    extend: {},
  },
  plugins: [],
};

