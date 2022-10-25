import React from 'react';
import { CheckboxInput, ContainerCheckbox } from './styles';

function InputCheckbox() {
  return (
    <ContainerCheckbox>
      <label htmlFor='checkbox'>
      <CheckboxInput 
        type='checkbox'
        name='checkbox'
        id='checkbox'
      />
        Manter-me conectado
      <div className='check'></div>
      </label>
    </ContainerCheckbox>
  );
}

export default InputCheckbox;
