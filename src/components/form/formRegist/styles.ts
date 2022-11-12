import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-top: 3rem;
`;

export const RegistForm = styled.div`
    margin: 2rem auto;
    padding: 2rem 3rem;
    width: 87%;
    max-width: 790px;

& > p {
   display: block;
   font-size: 0.75rem;
   text-align: end;
   color:${props => props.theme.colors.subText}
}

.decoretor {
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.theme.colors.sky};
  transition:  color 0.1s;
}

.decoretor:hover {
  color: ${props => props.theme.colors.sea};
}


form {
  margin-top: 1.6rem;

  & .termos {
    text-align: center;
    margin: 0.233rem 2rem;
  }
}



@media(min-width: 2220px){
  &{
    padding: 1rem 2rem;
  }
}


@media(max-width: 980px){
  & {
    padding: 1rem 2rem;

    & > p {
      position: absolute;
      top: 50px;
      right: 30px;
    }

  }
}
`


