import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Montserrat:ital@1&display=swap");
  
  //VARIABLES DEFINITION
  :root {
  --colorBlueNavBar: #202a38;
  --colorLightBlue: #384152;
  --colorBackgroundLightGrey: #dadfe3;
  --colorBackgroundOrangeCard: #ecb78d;
  --colorTextBlack: #000000;
  --colorTextWhite: #ffffff;
  --font-familyTitle: "Montserrat", bold;
  --font-familyBody: "Hind", sans-serif;
  }
`;
export default GlobalStyle;
