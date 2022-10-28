import React, { ButtonHTMLAttributes } from "react";
import { ButtonContainer, Submit } from "./style";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<buttonProps> = (props) => {
  return (
    <ButtonContainer>
      <Submit {...props}></Submit>
    </ButtonContainer>
  );
};

export default Button;
