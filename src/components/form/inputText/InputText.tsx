import React, { InputHTMLAttributes, ReactNode } from "react";

import { EnvelopeSimple, LockSimple } from "phosphor-react";

import { Input, InputContainer } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const InputText: React.FC<Props> = (props) => {
  return (
    <InputContainer>
      <span className="icon">
        {props.type === "email" ? (
          <EnvelopeSimple size={24} />
        ) : (
          <LockSimple size={24} />
        )}
      </span>

      <Input {...props} />
    </InputContainer>
  );
};

export default InputText;
