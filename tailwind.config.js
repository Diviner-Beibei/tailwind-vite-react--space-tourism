/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      'bellefair': ['Bellefair', 'sans-serif'],
      'barlow': ['Barlow', 'sans-serif'],
    },
    letterSpacing: {
      medium: '3.38px',
    },
    extend: {
      backgroundImage: {
        'desktop-backimg': "url('/assets/home/background-home-desktop.jpg')",
        'tablet-backimg': "url('/assets/home/background-home-tablet.jpg')",
        'mobile-backimg': "url('/assets/home/background-home-mobile.jpg')",
      },
      colors: {
        'primary': "#D0D6F9",
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
}

