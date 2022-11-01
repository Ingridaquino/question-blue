import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 1200px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 490px;
  align-items: center;
  padding: 0 3rem 9rem;
  /* padding: 1rem 5rem; */

  gap: 2rem;
  margin: 0 auto;

  //mobile
  @media (max-width: 980px) {
    & {
      grid-template-columns: 1fr;
      grid-template-rows: 100px 1fr;
      gap: 0;
      padding: 0;
      margin: 0;

    }

    & > div {
      width: 415px;
      margin: 0 auto;
    }
  }
`;


export const ImagemContainer = styled.div`
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    top: -1px;
    left: 707px;
    border: 1px solid ${(props) => props.theme.colors.sky};
  }

  img {
    display: block;
    margin: 3rem auto;
    width: 80%;
    height: 90%;
  }

  //mobile
  @media (max-width: 986px) {
    img {
      position: absolute;
      right: -120px;
      top: -200px;
      z-index: -1;
      overflow: hidden;
    }
  }
`;
