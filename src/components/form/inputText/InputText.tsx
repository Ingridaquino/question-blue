import React, { ReactNode } from "react";
import {Input, InputContainer } from "./styles";

import { EnvelopeSimple, LockSimple } from 'phosphor-react'


interface Props {
  value?: string;
  placeholder: string;
  type: string;
  max?: number;
  ref?: ReactNode;
}

const InputText = ({ value, placeholder, type, max, ref }: Props) => {


  return (
    <InputContainer>
      <span className="icon">
        {type === 'email' ? (<EnvelopeSimple  size={24}/>) : (<LockSimple  size={24}/>)}
      </span>
      <Input
        value={value}
        placeholder={placeholder}
        type={type}
        max={max}
      />
      {/* <HelperText error={error}>{helperText}</HelperText> */}
    </InputContainer>
  );
};

export default InputText;