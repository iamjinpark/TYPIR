import range from 'lodash/range';
const pxToRem = (px, base = 16) => `${px / base}rem`;

const pxToRemFunc = (start, end) => {
  return range(start, end).reduce((acc, px) => {
    acc[`${px}px`] = pxToRem(px);
    return acc;
  }, {});
};

//@ts-nocheck
/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        misty: '#d9d9d9',
        white: '#ffffff',
        content: '#333333',
        gray: {
          50: '#f9f9f9',
          100: '#e1e1e1',
          200: '#c4c4c4',
          300: '#a6a6a6',
          400: '#898989',
          500: '#6b6b6b',
          600: '#565656',
          700: '#404040',
          800: '#2b2b2b',
          900: '#151515',
        },
        Info: { Error: '#f03f40' },
      },
      fontFamily: {
        serif: ['PT Serif', 'sans-serif'],
      },
      boxShadow: {
        text: 'inset 1px 1px 0px 0px rgba(0,0,0,1)',
        'Above/High': '0px -16px 48px 0px rgba(0,0,0,0.3)',
        'Above/Medium': '0px -8px 36px 0px rgba(0,0,0,0.2)',
        'Above/Low': '0px -4px 24px 0px rgba(0,0,0,0.1)',
        'Below/High': '0px 16px 48px 0px rgba(0,0,0,0.3)',
        'Below/Medium': '0px 8px 36px 0px rgba(0,0,0,0.2)',
        'Below/Low': '0px 4px 24px 0px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        xs: '1px',
        sm: '2px',
        lg: '5px',
        xl: '8px',
        '2xl': '12px',
        '3xl': '16px',
        '4xl': '17px',
      },
      spacing: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        ...pxToRemFunc(1, 1000),
      },
      inset: {
        ...pxToRemFunc(1, 1000),
      },
      fontSize: {
        ...pxToRemFunc(1, 1000),
      },
      lineHeight: {
        ...pxToRemFunc(1, 1000),
      },
      screens: {
        mobile: '360px',
        tablet: '768px',
        desktop: '1280px',
      },
    },
    animation: {
      'bubble-fadeIn': 'fadeIn 3s',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '30%': { opacity: 1 },
        '80%': { opacity: 1 },
        '100%': { opacity: 0 },
      },
    },
  },
  plugins: [],
};
