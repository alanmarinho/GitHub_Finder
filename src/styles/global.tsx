import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: consolas, sans-serif;
    
  }
  
  body{
    background-color: ${({ theme }) => theme.colors.background};
    height: 100%;
    margin-top: 80px;
  }
  #global{
      height: 100vh;
      
  }
`;