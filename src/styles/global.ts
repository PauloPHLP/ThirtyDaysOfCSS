import { createGlobalStyle } from 'styled-components';

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
    background-color: #0F1228;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  ::-webkit-scrollbar {
    width: 10px;
	  background-color: #282d4f;
    border-radius:  4px;
  }

  ::-webkit-scrollbar-track {
	  background-color: #282d4f;
    border-radius:  4px;

  }

  ::-webkit-scrollbar-thumb {
    background-color: #6fd0cf;
    border-radius:  4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a592f2;
  }

  .container-code {
    height: 100%;
    width: 100%;
    overflow: auto;
    border-radius: 1rem;
  }

  .container-code div {
    padding: 1rem;
  }
`;
