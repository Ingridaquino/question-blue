import React, { ButtonHTMLAttributes } from "react";
import { Submit } from "./style";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<buttonProps> = (props) => {
  return (
    <div>
      <Submit {...props}></Submit>
    </div>
  );
};

export default Button;
