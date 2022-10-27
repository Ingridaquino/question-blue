import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-top: 3rem;
`;

export const FormLogin = styled.div`
    padding: 1rem 5em;

span {
   display: block;
   font-size: 0.75rem;
   text-align: end;
   color:#7C7C8A;
}


form {
  margin-top: 3rem;

  label {
    margin-top: 12px;
    font-size: 1rem;
    font-weight: 600;
    color:#E1E1E6;
    line-height: 17px;
  }


}

@media(min-width: 2220px){
  &{
    padding: 4rem 2rem;
  }
}


@media(max-width: 996px){
    & {
    margin-top: 4px;
    width: 80%;

    span {
      position: absolute;
      top: 50px;
      right: 30px;
    }

  }
}
`


