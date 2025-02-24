/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#42454a',
        secondary: '#fafafa',
        light: '#fff',
        input: '#f5f5f5',
      },
      fontFamily: {
        light: ['Ubuntu-light'],
        regular: ['Ubuntu-Regular'],
        medium: ['Ubuntu-Medium'],
        bold: ['Ubuntu-Bold'],
      },
      fontSize: {
        xs: ['14px', '16px'],
        sm: ['16px', '18px'],
        '2sm': ['18px', '18px'],
        base: ['20px', '28px'],
        '1base': ['30px', '34px'],
        md: ['22px', '34px'],
        '2md': ['40px', '40px'],
        lg: ['50px', '60px'],
        '1lg': ['80px', '92px'],
        xl: ['90px', '95px'],
      },
      padding: {
        base: '14px',
        md: '26px',
        lg: '38px',
      },
      borderRadius: {
        base: '10px',
      },
      lineHeight: {
        base: '18px',
        md: '34px',
        lg: '54px',
      },
      boxShadow: {
        custom: '0px 13.21px 26.42px 0px rgba(0, 0, 0, 0.06)',
        'custom-active':
          '0px 1.85px 3.15px #31313106, 0px 20px 13px #3131310d, 0px 38.52px 25.48px #3131310f',
        'gallery-item': '0px 15px 70px 0px #a2a9c033',
      },
      container: {
        center: true,
        padding: '50px',
        screens: {
          xl: '1280px',
          '2xl': '1440px',
          '3xl': '1660px',
        },
      },
      width: {
        navbar: 'calc(100% - 1100px)',
        md: '48px',
        lg: '58px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        '.primary': {
          backgroundColor: theme('colors.primary'),
          border: `1px solid ${theme('colors.primary')}`,
          color: theme('colors.light'),
          '&:hover': {
            backgroundColor: '#2e2f33',
          },
        },
        '.secondary': {
          backgroundColor: theme('colors.light'),
          border: `1px solid ${theme('colors.light')}`,
          color: theme('colors.primary'),
          boxShadow: '0px 12px 25px -10px #0000000a',
          '&:hover': {
            backgroundColor: '#f2f2f2',
          },
        },
        '.tertiary': {
          width: '572px',
          backgroundColor: theme('colors.light'),
          color: theme('colors.primary'),
          border: `2px solid ${theme('colors.primary')}`,
          padding: '29px 62px',
          fontFamily: theme('fontFamily.bold'),
          fontSize: '30px',
          lineHeight: '36px',
          borderRadius: '10px',
          '&:hover': {
            backgroundColor: theme('colors.secondary'),
          },
        },
        '.link': {
          padding: '24px 17px',
          border: `1px solid ${theme('colors.primary')}`,
          backgroundColor: theme('colors.primary'),
          color: theme('colors.light'),
          borderRadius: 'unset',
          '&:hover': {
            backgroundColor: '#2e2f33',
          },
        },
        '.transparent': {
          display: 'flex',
          alignItems: 'center',
          borderStyle: 'none',
          backgroundColor: 'transparent',
          padding: '0',
        },
        '.btn-carousel-primary': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '42px',
          height: '42px',
          padding: '0',
          borderRadius: '50%',
          border: `1px solid ${theme('colors.primary')}`,
        },
        '.btn-carousel-secondary': {
          display: 'flex',
          alignItems: 'center',
          borderStyle: 'none',
          padding: '17px 23px',
        },
        '.btn-prev-secondary': {
          borderRight: `1px solid ${theme('colors.primary')}`,
          borderRadius: 'initial',
        },
      });
    }),
  ],
};
