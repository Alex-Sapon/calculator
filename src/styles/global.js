import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    font-family: "Roboto", sans-serif;
    background-color: #fafafa;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;
