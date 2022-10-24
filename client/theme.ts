import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#1ea4ce',
    grayScale: {
      gray100: '#f8f9fa',
      gray200: '#e9ecef',
      gray300: '#dee2e6',
      gray400: '#f2f2f2',
      gray500: '#e0e0e0',
      gray600: '#bdbdbd',
      gray700: '#828282',
      gray800: '#4f4f4f',
      gray900: '#333333',
    },
  },
  fontSizes: {
    base: '1rem', // 16px
  },

  fontWeights: {
    thin: 100,
    regular: 400,
    medium: 500,
    light: 300,
    bold: 700,
    black: 900,
  },
  device: {
    widescreen: '(max-width: 1440px)',
    desktop: '(max-width: 1280px)',
    laptop: '(max-width: 1024px)',
    tablet: '(max-width: 768px)',
    phone: '(max-width: 640px)',
    mini: '(max-width: 425px)',
  },
  utils: {
    lineClamp: (clampCount: number) => `
    display: -webkit-box;
    -webkit-line-clamp: ${clampCount};
    -webkit-box-orient: vertical;
    overflow: hidden;`,
  },
};

export default theme;
