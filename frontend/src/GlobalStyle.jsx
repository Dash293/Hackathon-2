import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* @import url("https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Montserrat:ital@1&display=swap"); */
  

  //VARIABLES DEFINITION
  :root {
  --colorBlueNavBar: #202a38;
  --colorLightBlue: #384152;
  --colorBackgroundLightGrey: #dadfe3;
  --colorBackgroundOrangeCard: #ecb78d;
  --colorTextBlack: #000000;
  --colorTextWhite: #ffffff;
  --font-familyTitle: 'Montserrat', sans-serif;
  --font-familyBody: "Hind", sans-serif;
  }
  body{
    background-color: var(--colorBackgroundLightGrey);
  }
  p,h1,h2,h3,h4,h5,h6{
    color: var(--colorTextBlack);
  }
  p{
    font-family: var(--font-familyBody);
    font-size: 1em;
  }
  h1{
    font-family: var(--font-familyTitle);
    font-size: 2em;
    font-weight: bold;
  }
`;
export default GlobalStyle;
