// const {classes} = require('@macramejs/admin-vue3/dist/classes');

module.exports = {
  presets: [require('@macramejs/admin-config')],
  safelist: [
    // ...classes
  ],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './packages/**/*.vue',
  ],
}
