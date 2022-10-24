const theme = {
  colors: {
    primary: '#1ea4ce',
    white: '#fff',
    black: '#000',
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
    base: '1rem',
  },
  fontWeights: {
    /** 100 */
    thin: 100,
    /** 300 */
    light: 300,
    /** 400 */
    regular: 400,
    /** 500 */
    medium: 500,
    /** 700 */
    bold: 700,
    /** 900 */
    black: 900,
  },
  device: {
    /** (max-width: 1440px) */
    widescreen: '(max-width: 1440px)',
    /** max-width: 1280px */
    desktop: '(max-width: 1280px)',
    /** max-width: 1024px */
    laptop: '(max-width: 1024px)',
    /** max-width: 768px */
    tablet: '(max-width: 768px)',
    /** max-width: 640px */
    phone: '(max-width: 640px)',
    /** max-width: 425px */
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
