import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Jalnan';
    src:url("/fonts/Jalnan.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }

  ul {
    padding: 0;
    margin: 0;
  }
  
  li{
    list-style: none;
  }

`;

export { GlobalStyle };
