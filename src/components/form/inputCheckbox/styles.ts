import styled from "styled-components";

export const ContainerCheckbox = styled.div`
  & input:checked ~ .check:after {
    display: block;
  }

  & .check:after {
    left: 0.75em;
    top: 0.45em;
    width: 0.25em;
    height: 0.5em;
    border: solid ${(props) => props.theme.colors.sky};
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
    margin: 0 auto;
  }
`;

export const Label = styled.label`
  position: relative;
  cursor: pointer;
  user-select: none;
  padding: 1rem;
  margin-left: 25px;
  font-size: 0.875rem;
  font-weight: 400;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const Check = styled.div`
  margin-top: -22px;
  background-color: ${(props) => props.theme.colors.secundary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  top: 0;
  left: 0;
  height: 1.5rem;
  width: 1.5rem;
  transition: all 0.3s;
  border-radius: 4px;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;
