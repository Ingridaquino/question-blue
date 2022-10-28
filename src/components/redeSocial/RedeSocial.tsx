import { FacebookLogo, GoogleLogo } from "phosphor-react";
import React from "react";
import { ContainerRede, ContainerSocial } from "./style";

function RedeSocial() {
  return (
    <ContainerSocial>
      <p>Ou entre com </p>

      <div>
        <ContainerRede>
          <GoogleLogo size={24} className="icon-rede" />
          <span>Google</span>
        </ContainerRede>

        <ContainerRede>
          <FacebookLogo size={24} className="icon-rede" />
          <span>Facebook</span>
        </ContainerRede>
      </div>
    </ContainerSocial>
  );
}

export default RedeSocial;
