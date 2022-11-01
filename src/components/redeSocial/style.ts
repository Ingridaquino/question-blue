import styled from "styled-components";

export const ContainerSocial = styled.div`
  margin: 0 auto;
  padding: 1rem 4rem;
  text-align: start;

  & > p {
    color: ${(props) => props.theme.colors.subText};
    font-size: 0.75rem;
    font-family: 400;
    margin-bottom: 1rem;
    padding: 0 1.5rem;
  }

  & > div {
    width: 360px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
  }

  &::before {
    content: "";
    position: absolute;
    width: 22%;
    right: 16.6%;
    top: 73%;
    border: 1px solid ${(props) => props.theme.colors.secundary};
  }

  @media (min-width: 2220px) {
    &::before {
      width: 23rem;
      right: 48rem;
      top: 38rem;
    }

    & {
      width: 100%;
      padding-top: 3rem;
    }

    & > div {
      width: 100%;
    }
  }

  @media (max-width: 980px){
    & {
      width: 290px;
      padding: 0;
      margin: 0 auto;
    }
    
    & > div {
      width: 100%;
      margin-right: 10rem;
      margin: 0 auto;
    }

    &::before {
      width: 14rem;
      right: 26.6%;
      top: 74%;
    }
  }

`;

export const ContainerRede = styled.div`
  width: 150px;
  height: 45px;
  background-color: ${(props) => props.theme.colors.secundary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;

  & > .icon-rede {
    color: ${(props) => props.theme.colors.black};
  }

  & > span {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.text};
  }

  @media (max-width: 980px) {
    & {
      width: 120px;
      padding: 1rem;
    }
  }
`;
