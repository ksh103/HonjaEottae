import { GlobalStyle } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import theme from '../styles/theme';
import 'antd/dist/antd.css';
import Head from 'next/head';

declare global {
  // 카카오 map
  interface Window {
    kakao: any;
  }
}

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>혼자어때</title>
        <meta name="keywords" content="search, 검색, 혼자어때, SSAFY, click" />
        <meta name="description" content="혼자어때 관광 사이트"></meta>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
