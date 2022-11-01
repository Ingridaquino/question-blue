import styled from "styled-components";

export const ContainerSocial = styled.div`
  margin: 0 auto;
  padding: 1.2rem 0;
  width: 100%;
  text-align: start;

  & > p {
    color: ${(props) => props.theme.colors.subText};
    font-size: 0.75rem;
    font-family: 400;
    margin: 1.2rem 0;
    padding: 0 1.5rem;
  }

  & > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
  }

  .before {
    margin: 0 0 1.5rem 0;
    font-size: 12px;
    position: relative;
    text-align: center;
  }

  .before::before, .before::after  {
    content: "";
    position: absolute;
    width: calc(50% - 25px);   
    height: 1px;
    /* top: 50%; */
    background-color: ${(props) => props.theme.colors.secundary};
  }
  
  .before::before {
    right: 0;
  }

  .before::after {
    left: 0;
  }

  @media (min-width: 2220px) {
    & {
      width: 100%;
      padding-top: 2rem 0 ;
    }

    & > div {
      width: 100%;
      gap: 1.5rem;
    }
  }

  @media (max-width: 980px){
    & {
      padding: 0;
      margin: 0 auto;
    }
    
    & > div {
      width: 100%;
      margin-right: 10rem;
      margin: 0 auto;
      gap: 1rem;
    }

    .before {
      margin: 1.2rem 0;
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

  & > p {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.text};
  }

  @media (max-width: 980px) {
    & {
      padding: 1rem;    }
  }

  @media (min-width: 2200px) {
    & {
      width: 290px;
    }
  }
`;
