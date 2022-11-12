import React from "react";
import Form from "../../components/form/formLogin/Form";
import { Container, ImagemContainer } from "./styles";
import Image from "./../../assets/question.svg";
import RedeSocial from "../../components/redeSocial/RedeSocial";

function Login() {
  return (
    <Container>
      <ImagemContainer>
        <img src={Image} alt="" />
      </ImagemContainer>

      <div>
        <Form />
      </div>
    </Container>
  );
}

export default Login;
