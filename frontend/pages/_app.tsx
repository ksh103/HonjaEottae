import { GlobalStyle } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import theme from '../styles/theme';
import 'antd/dist/antd.css';
import Head from 'next/head';
import { configureStore } from '../store/configureStore';

declare global {
  // 카카오 map
  interface Window {
    kakao: any;
    Kakao: any;
  }
}

const store = configureStore();
function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>혼자어때</title>
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
