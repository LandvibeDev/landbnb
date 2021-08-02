import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
