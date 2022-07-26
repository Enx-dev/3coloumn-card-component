import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
:root{
    font-size:15px;
}
`;

export const theme = {
  fontFamily: {
    head: "'Big Shoulders Display', cursive",
    text: "'Lexend Deca', sans-serif",
  },
  color: {
    para: "hsla(0, 0%, 100%, 0.75)",
    back: "hsl(0, 0%, 95%)",
  },
};
