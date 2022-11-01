import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-top: 3rem;
`;

export const FormLogin = styled.div`
    padding: 2rem 5rem;

span {
   display: block;
   font-size: 0.75rem;
   text-align: end;
   color:${props => props.theme.colors.subText}
}


form {
  margin-top: 3rem;

  & > label {
    margin-top: 12px;
    font-size: 1rem;
    font-weight: 600;
    color:${props => props.theme.colors.text};
    line-height: 17px;
  }


}

@media(min-width: 2220px){
  &{
    padding: 1rem 2rem;
  }
}


@media(max-width: 980px){
  & {
    margin: 1rem 3rem;
    padding: 1rem 2rem;

    span {
      position: absolute;
      top: 50px;
      right: 30px;
    }

  }
}
`


