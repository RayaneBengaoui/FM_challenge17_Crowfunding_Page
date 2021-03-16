import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
      box-sizing: border-box;
      padding: 0;
      margin: 0;
  }

  html{
    font-family: 'Commissioner', sans-serif;
  }
`;

export default GlobalStyle;
