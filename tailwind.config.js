/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        brown: '#131313',
        primary: '#041e39',
        green: '#33D100',
        danger: '#ff0e0e',
        gray: '#d3d3d3',
      },
      width: {
        '90vw': '90vw',
      },
      height: {
        '80vh': '80vh', // 90% of the viewport height
        '95vh': '95vh', // 90% of the viewport height
      },
      screens: {
        xs: { max: '767px' },
        sm: { min: '350px', max: '767px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }
        md: { min: '768px', max: '975px' },
        lg: '976px',
        xl: '1440px',
      },
      backgroundImage: {
        'banner-img': "url('/assets/banner.jpg')",
        'banner-1': "url('/assets/1.jpeg')",
        'banner-2': "url('/assets/2.jpeg')",
        'banner-3': "url('/assets/3.jpeg')",
        'banner-4': "url('/assets/4.jpeg')",
        'banner-5': "url('/assets/5.jpeg')",
        'banner-vedio': "url('/assets/banner-gif.gif')",
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
