import React, { InputHTMLAttributes, ReactNode } from "react";

import { EnvelopeSimple, LockSimple, User } from "phosphor-react";

import { Input, InputContainer } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}


const InputText: React.FC<Props> = (props) => {

  function iconInput() {
    if(props.type === "email"){
      return <EnvelopeSimple size={24} />
    } else if(props.type === "password") {
      return <LockSimple size={24} />
    } else {
      return <User size={24} />
    }
  }


  return (
    <InputContainer>
      <span className="icon">
        {iconInput()}
      </span>

      <Input {...props} />
    </InputContainer>
  );
};

export default InputText;
