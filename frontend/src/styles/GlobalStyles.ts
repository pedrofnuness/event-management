import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }

  body {
    background: linear-gradient(#F7F8FC, #dbd9d9);
  }

  body, #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100vw;
  }

  .container {
    padding: 150px;
  }
`;

export default GlobalStyle;