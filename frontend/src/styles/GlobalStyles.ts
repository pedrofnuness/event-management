import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    width: 100%;
    height: 100%;
  }

  body, #root {
    display: flex;
    flex-direction: column;
    background: #f0f0f0;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  };

  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    width: 250px;
    height: 60px;
    border: none;
    border-radius: 15px;
    background-color: #7b48b5;
    color: white;
    font-weight: bold;
    font-family: sans-serif;
    font-size: 16px;
    cursor: pointer;

    position: fixed;
    right: 35px;
    bottom: 35px;
    z-index: 1;
  }
`;

export default GlobalStyle;