import React from "react";
import Form from "../../components/form/Form";
import { Container } from "./styles";
import Image from './../../assets/question.svg'

function Login() {
  return (
    <Container>
      <div>
        <img
          src={Image}
          alt=""
        />
      </div>

      <Form />

    </Container>
  );
}

export default Login;
