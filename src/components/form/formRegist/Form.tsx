import React, { useState, useCallback, useContext } from "react";
import { RegistForm, Title } from "./styles";
import InputText from "../inputText/InputText";
import InputCheckbox from "../inputCheckbox/InputCheckbox";
import { userRegist } from "../../../models/UserRegist";
import { listUser } from "../../../json/ListUser";
import Button from "../../button/Button";
import { ThemeContext } from "styled-components";
import RedeSocial from "../../redeSocial/RedeSocial";
import { Link, NavLink } from "react-router-dom";

export default function FormRegist() {
  const { colors, title } = useContext(ThemeContext);
  const [dados, setDados] = useState<userRegist>({
    email: "",
    user: "",
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
    <RegistForm>
      <Title> Crie sua conta </Title>

      <form onSubmit={handlaSubmit} id="formLogin">
        <div>
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

            <InputText
              placeholder="Seu nome"
              type="user"
              id="user"
              value={dados.user}
              max={20}
              required
              onChange={(event) =>
                setDados({
                  ...dados,
                  password: event.currentTarget.value || "",
                })
              }
            />

            <InputText
              placeholder="Sua senha"
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

            <InputText
              placeholder="Confirme sua senha"
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

          <div className="termos">
            <p>Ao se registrar você aceita nossos <a href="">termos de uso</a> e a nossa <a href="">política de privacidade</a></p>
          </div>

        </div>
      </form>

      <Button type="submit" form="formRegist" disabled={isSubmitDisabled()}>
        Cadastrar
      </Button>
    </RegistForm>
  );
}
