import styled from "styled-components";

export const ContainerCheckbox = styled.div`
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    /* justify-content: start; */
    padding: 1rem;
    position: relative;


    label {
      font-size: 16px;
      margin-left: 12px;
      display: block;
      position: relative;
      cursor: pointer;
    }
`;


export const CheckboxInput = styled.input`
    all: unset; //tira a estilizaçao padrao dele
    width: 24px;
    height: 24px;
    background-color:#252B4E;
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;

    &:checked {
      background-color: #252B4E;
    }

    & > .check::after {
      top: 5px;
      left: 9px;
      background: yellow;
      height: 10px;
      width: 5px;
      content: '';
      border: solid white;
      border-width: 0 3px 3px 0;

      transform:rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
    }

`;