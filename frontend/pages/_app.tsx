import { GlobalStyle } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
