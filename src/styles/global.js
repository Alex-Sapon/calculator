import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    font-weight: normal;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    background-color: #fafafa;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;
