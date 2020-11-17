import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 16px Roboto, sans-serif;
    background: #fff;
    width: 100vw;
    height: 100vh;

  }

  #app {
    max-width: 100vw;
    min-height: 100vh;
  }

  @media(max-width:600px) {
    body {
      width: 100vw;
    }
  }





`;
