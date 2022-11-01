import { FacebookLogo, GoogleLogo } from "phosphor-react";
import React from "react";
import { ContainerRede, ContainerSocial } from "./style";

function RedeSocial() {
  return (
    <ContainerSocial>
      <div className="before"></div>
      <p>Ou entre com </p>

      <div>
        <ContainerRede>
          <GoogleLogo size={24} className="icon-rede" />
          <p>Google</p>
        </ContainerRede>

        <ContainerRede>
          <FacebookLogo size={28} className="icon-rede" />
          <p>Facebook</p>
        </ContainerRede>
      </div>
    </ContainerSocial>
  );
}

export default RedeSocial;
