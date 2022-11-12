import React, { useState, useCallback, useContext } from "react";
import { FormLogin } from "./styles";
import InputText from "../inputText/InputText";
import InputCheckbox from "../inputCheckbox/InputCheckbox";
import { userLogin } from "../../../models/UserLogin";
import { listUser } from "../../../json/ListUser";
import Button from "../../button/Button";
import { ThemeContext } from "styled-components";
import RedeSocial from "../../redeSocial/RedeSocial";
import { Link, NavLink } from "react-router-dom";

function Form() {
  const { colors, title } = useContext(ThemeContext);
  const [dados, setDados] = useState<userLogin>({
    email: "",
    password: "",
    check: false,
  });

  const handlaSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const { email, password } = dados;

      const usersEmail = listUser.users.find((e) => email);
      const usersPassword = listUser.users.find((e) => password);

      if (email !== usersEmail?.email && password !== usersPassword?.password) {
        window.alert("Usuário não existe! Tente novamente");
      } else if (
        email === usersEmail?.email &&
        password === usersPassword?.password
      ) {
        window.alert("Logado com  sucesso");
        window.alert(`${usersEmail.name} Seja bem-vindo!!`);
      }
    },
    [dados]
  );

  function isSubmitDisabled() {
    const { email, password } = dados;

    if (!email && !password) {
      return true;
    }
  }

  return (
    <FormLogin>
      <form onSubmit={handlaSubmit} id="formLogin">
        <label htmlFor="email">
          Endereço de e-mail
          <InputText
            placeholder="Digite seu e-mail"
            type="email"
            id="email"
            value={dados.email}
            onChange={(event) =>
              setDados({
                ...dados,
                email: event.currentTarget.value || "",
              })
            }
            required
          />
        </label>

        <label htmlFor="password">
          Sua senha
          <InputText
            placeholder="*********"
            type="password"
            id="password"
            value={dados.password}
            max={8}
            required
            onChange={(event) =>
              setDados({
                ...dados,
                password: event.currentTarget.value || "",
              })
            }
          />
        </label>

        <InputCheckbox />
      </form>

      <Button type="submit" form="formLogin" disabled={isSubmitDisabled()}>
        Entrar
      </Button>
      <RedeSocial />
    </FormLogin>
  );
}

export default Form;
