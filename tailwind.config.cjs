const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: colors.white,
      black: colors.black,
      'primary': '#409EFF',
      'success': '#67C23A',
      'warning': '#E6A23C',
      'error': '#F56C6C',
      'info': '#909399',
      'header': '#17171A',
      'sidebar': '#212126',
      'gray-900': '#303133',
      'gray-600': '#606266',
      'gray-300': '#909399',
      'placeholder': '#A8ABB2',
      'disabled': '#C0C4CC',
      'border-base': '#DCDFE6',
      'border-light': '#E4E7ED',
      'border-lighter': '#EBEEF5',
      'page': '#F2F3F5',
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}