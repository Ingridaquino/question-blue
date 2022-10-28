import styled from "styled-components";

export const ContainerSocial = styled.div`
  width: 100%;
  height: 150px;
  margin: 0 auto;
  padding: 3rem;
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

    /* gap: 1rem; */
    margin: 0 auto;
  }

  &::before {
    content: "";
    position: absolute;
    width: 349px;
    right: 207px;
    top: 580px;
    border: 1px solid ${(props) => props.theme.colors.secundary};
  }
`;

export const ContainerRede = styled.div`
  width: 170px;
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
`;
