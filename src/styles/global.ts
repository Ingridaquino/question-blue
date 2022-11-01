import { createGlobalStyle } from "styled-components";

export const Base = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none; 
  }

  body {
    background-color:${(props) => props.theme.colors.background};
    font-size: 14px;
    color:${(props) => props.theme.colors.text};
    font-family: 'Inter', sans-serif; 
    overflow: hidden;
  }


`;
