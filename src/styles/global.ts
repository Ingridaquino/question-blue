import { createGlobalStyle } from "styled-components";

export const Base = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none; 
  }

  body {
    width: 100%;
    height: 100vh;
    background-color:${(props) => props.theme.colors.background};
    font-size: 14px;
    color:${(props) => props.theme.colors.text};
    font-family: 'Inter', sans-serif; 
    overflow: hidden;
  }

    /* scroll estilizado */

    ::-webkit-scrollbar {
    background-color: var(--blue-700);
    width: 0.7rem;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: var(--blue-900);
    border-radius: 0.4rem;
  }


`;
