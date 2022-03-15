import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Jalnan';
    src:url("fonts/Jalnan.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'Jalnan';
  }
`;

export { GlobalStyle };
