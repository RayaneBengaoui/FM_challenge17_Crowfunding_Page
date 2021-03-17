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

  ul{
    list-style:none;
    color:white;
    font-size: .9rem;
    font-weight: 400;

    li{
      cursor: pointer;
    }
  }
`;

export default GlobalStyle;
