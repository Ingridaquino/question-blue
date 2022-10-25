import React, { useState } from 'react';
import { FormLogin, Submit, Title } from './styles';
import InputText from './inputText/InputText';

import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message"
import InputCheckbox from './inputCheckbox/InputCheckbox';



function Form(){

  
                              
  return (
      <FormLogin>
        <span> Não tem conta? Cadastrar</span>

        <Title> Login </Title>

        <form>

          <label htmlFor='email'>
            Endereço de e-mail
            
            <InputText
              placeholder="Digite seu e-mail"
              type="email"
            />
          </label>

          <label htmlFor="password">
            Sua senha
            <InputText
              placeholder="*********"
              type="password"
              max={8}                          
            />
          </label>
          
         <InputCheckbox />
        </form>

        <Submit>Entrar</Submit>
      </FormLogin>
  );
};

export default Form;