import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Poppins', sans-serif;
    /* available font-weight: 400, 500 and 700 */ 
    background-color: #5E5E5E;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  #root {
    margin: 0 auto;
    max-width: 100vw;
   
  }
`;
