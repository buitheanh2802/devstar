const glob = require('glob');

function getEntryFiles() {
  const entryHbs = glob.sync('./src/app/views/**/*.hbs');
  const entryJsx = glob.sync('./src/modules/**/*.jsx');
  return [...entryHbs,...entryJsx];
}

module.exports = {
  purge: getEntryFiles(),
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      '2xl': { 'max': '1535px' },
      // 1215px
      'xl': { 'max': '1279px' },
      // 980px
      'lg': { 'max': '1023px' },
      
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
}
