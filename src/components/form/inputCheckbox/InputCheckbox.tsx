import React from "react";
import { Check, CheckboxInput, ContainerCheckbox, Label } from "./styles";

function InputCheckbox() {
  return (
    <ContainerCheckbox>
      <Label htmlFor="checkbox">
        Manter-me conectado
        <CheckboxInput type="checkbox" name="checkbox" id="checkbox" />
        <Check className="check"></Check>
      </Label>
    </ContainerCheckbox>
  );
}

export default InputCheckbox;
