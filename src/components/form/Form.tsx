import React, { useState, useCallback, useContext} from 'react';
import { FormLogin, Title } from './styles';
import InputText from './inputText/InputText';
import InputCheckbox from './inputCheckbox/InputCheckbox';
import { userLogin } from '../../models/UserLogin';
import { listUser } from '../../json/ListUser';
import Button from '../button/Button';
import { ThemeContext } from "styled-components";



function Form(){
  const { colors, title } = useContext(ThemeContext)




  const[dados, setDados] = useState<userLogin>({
    email: '',
    password: '',
    check: false,
  });
  
 const handlaSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const {email, password} = dados;
      
      const usersEmail = listUser.users.find((e) => email);
      const usersPassword = listUser.users.find((e) => password);


      // if(!email || !password) {
      //   alert("Preencha todos os campos!")
      // } 
      
      if(email !== usersEmail?.email && password !== usersPassword?.password) {
          window.alert('Usuário não existe! Tente novamente')

        }else if(email === usersEmail?.email && password === usersPassword?.password){
          window.alert("Logado com  sucesso")
          window.alert(`${usersEmail.name} Seja bem-vindo!!`)
      }
        
      },
      [dados]
      );

      
      
    function isSubmitDisabled(){
      const {email, password} = dados;

      if(!email && !password){
        return true
      }
    }
                              
  return (
      <FormLogin>
        <span color={colors.subText}> Não tem conta? Cadastrar</span>

        <Title> Login </Title>

        <form onSubmit={handlaSubmit} id="formLogin">

          <label htmlFor='email'>
            Endereço de e-mail
            
            <InputText
              placeholder="Digite seu e-mail"
              type="email"
              id='email'
              value={dados.email}
              onChange={(event) => setDados({
                ...dados, email: event.currentTarget.value || '',
              })}
              required
            />
          </label>

          <label htmlFor="password">
            Sua senha
            <InputText
              placeholder="*********"
              type="password"
              id='password'
              value={dados.password}
              max={8}          
              required
              onChange={(event) => setDados({
                ...dados, password: event.currentTarget.value || '',
              })}

            />
          </label>
          
         <InputCheckbox 

         />
        </form>

        <Button type='submit' form='formLogin' disabled={isSubmitDisabled()}>Entrar</Button>
      </FormLogin>
  );
};

export default Form;