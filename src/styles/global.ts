import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #161616;
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
    background-image: url(${background});
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }

  body, input, button {
    font-family: 'Ubuntu', serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
`;
