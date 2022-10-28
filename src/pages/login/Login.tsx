import React from "react";
import Form from "../../components/form/Form";
import { After, Container, ImagemContainer } from "./styles";
import Image from './../../assets/question.svg'

function Login() {
  return (
    <Container>
      <ImagemContainer>
        <img
          src={Image}
          alt=""
        />
      </ImagemContainer>

      <Form />

      <After></After>

    </Container>
  );
}

export default Login;
