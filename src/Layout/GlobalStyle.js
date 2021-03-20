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

  button{
    background: none;
    border: none;
    font-family: inherit;
    outline: none;
    cursor: pointer;
  }

  p {
    color: hsl(0, 0%, 48%);
    font-weight: 500;
    font-size: 0.9rem;
    line-height:1.8;
  }

  h3{

    
  }
`;

export default GlobalStyle;
