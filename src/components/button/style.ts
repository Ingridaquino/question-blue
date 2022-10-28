import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding: 0rem rem;
  
  
  `


export const Submit = styled.button`
    width: 100%;
    padding: 0.90rem 1rem;
    height: 57px;
    margin-top: 30px;
    font-weight: bold;
    font-size: 1rem;
    font-family: 'Inter';
    background-color:${props => props.theme.colors.sky};
    color: ${props => props.theme.colors.text};
    text-transform:uppercase;
    cursor: pointer;

    border: none;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: filter 0.1s;

    &:hover{
      filter: opacity(0.8);
    }

    &:not(:disabled):hover {
      background-color: ${props => props.theme.colors.sky};
      filter: opacity(0.8);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }


    

`