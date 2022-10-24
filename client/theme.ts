import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#1EA4CE',
  },
  utils: {
    lineClamp: (clampCount: number) => `
    display: -webkit-box;
    -webkit-line-clamp: ${clampCount};
    -webkit-box-orient: vertical;
    overflow: hidden;`,
  },
  fontWeights: {
    thin: 100,
    regular: 400,
    medium: 500,
    light: 300,
    bold: 700,
    black: 900,
  },
  fontSizes: {
    base: '1rem', // 16px
  },
};

export default theme;

export const device = {
  widescreen: '(max-width: 1440px)',
  desktop: '(max-width: 1280px)',
  laptop: '(max-width: 1024px)',
  tablet: '(max-width: 768px)',
  phone: '(max-width: 640px)',
  mini: '(max-width: 425px)',
};
