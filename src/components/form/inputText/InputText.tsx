import React, { InputHTMLAttributes, ReactNode } from "react";

import { EnvelopeSimple, LockSimple } from 'phosphor-react'

import {Input, InputContainer } from "./styles";



interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const InputText: React.FC<Props>=(props) => {


  return (
    <InputContainer>

      <span className="icon">
        {props.value === 'email' ? (<EnvelopeSimple  size={24}/>) : (<LockSimple  size={24}/>)}
      </span>

      <Input {...props}  />
      {/* <HelperText error={error}>{helperText}</HelperText> */}
    </InputContainer>
  );
};

export default InputText;