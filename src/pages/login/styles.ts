import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 1200px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 490px;
  align-items: center;
  padding: 0 4rem 3rem;
  gap: 2rem;
  margin: 0 auto;
  


  //mobile
  @media(max-width: 876px){
    & {
    grid-template-columns: 1fr;
    grid-template-rows: 200px 1fr;
    gap: 1rem;
  }
}
`;

export const ImagemContainer = styled.div `
    width: 100%;
    height: 100%;
    
    img {
      display: block;
      margin: 3rem auto;
      width: 80%;
      height: 90%;
    }


      //mobile
  @media(max-width: 876px){
    img {
        position:absolute;
        right: -200px; 
        top: -60px;
        z-index: -1;
        overflow: hidden;
    }
  }
`
