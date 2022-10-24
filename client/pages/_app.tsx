import 'styles/globals.css';
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

import theme from 'theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <div id="modal" />
    </ThemeProvider>
  );
}

export default MyApp;
