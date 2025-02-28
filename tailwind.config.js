/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      fontFamily: {
        // regular: ['Regular', 'sans-serif'],
        // medium: ['Medium', 'sans-serif'],
        // bold: ['Bold', 'sans-serif'],
      },

      boxShadow: {
        '3xl': '14px 17px 40px 4px',
        inset: 'inset 0px 18px 22px',
        darkinset: '0px 4px 4px inset',
      },
      borderRadius: {
        primary: '20px',
      },
    },

    colors: () => ({
      backGroundPrimary: '#EFEFEF',
      textBlack: '#282828',
      textLight: '#707070',
      white: '#ffffff',
      lightPrimary: '#F4F7FE',
      blueSecondary: '#4318FF',
      brandLinear: '#868CFF',
      primaryColor: '#000000',
      secondaryColor: '#ffffff',
      priceColor: '#666666',
      textColor: '#333333',
      bgDefaultColor: '#f5f5f5',
    }),
    fontSize: {
      biggerName: '36px',
      bigPrdName: '28px',
      largerPrdName: '24px',
      textPrd: '20px',
      primaryPrdName: '18px',
      normal: '16px',
      small: '14px',
      min: '12px',
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(22deg, #272f28 24%, #dfd69a 53%, #877f53 88%)',
    },
  },
  plugins: [],
}
