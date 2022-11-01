import styled from "styled-components";

export const InputContainer = styled.div`
  padding: 0.7rem 1.2rem;
  margin: 0.75rem 0 2rem 0;
  background-color: ${(props) => props.theme.colors.secundary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  .icon {
    margin-top: 6px;
    color: ${(props) => props.theme.colors.subText};
  }


 @media (max-width:980px){
   & > .icon {
    color: green;
    font-size: 40rem !important;
    display: none;
   }
 }
`;

export const Input = styled.input`
  width: 390px;
  padding: 0.5rem 0;
  background-color: transparent;
  display: inline-block;
  box-sizing: border-box;
  border: 0;
  outline: none;
  margin-left: 12px;
  color: ${(props) => props.theme.colors.subText};
  font-size: 0.875rem;
  user-select: none;

  &::placeholder {
    font-weight: 500;
    line-height: 15px;
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.subText};
    text-align: start;
    display: block;
  }
`;
