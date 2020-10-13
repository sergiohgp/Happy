import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    color: #fff;
    background: #ebf2f5;
  }

  body, input, button, textarea {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  `;
