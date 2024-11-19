/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [ "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // primary: '#161622'
        primary: '#FFFFFF'
      },
      fontFamily: {
        'pblack': ['Poppins-Black', 'sans-serif'],
        'pbold': ['Poppins-Bold', 'sans-serif'],
        'pextrabold': ['Poppins-ExtraBold', 'sans-serif'],
        'pextralight': ['Poppins-ExtraLight', 'sans-serif'],
        'pmedium': ['Poppins-Medium', 'sans-serif'],
        'plight': ['Poppins-Light', 'sans-serif'],
        'pregular': ['Poppins-Regular', 'sans-serif'],
        'psemibold': ['Poppins-SemiBold', 'sans-serif'],
        'pthin': ['Poppins-Thin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}