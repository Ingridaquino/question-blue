import styled from 'styled-components';


export const FormLogin = styled.div`
    margin: 3rem auto;
    padding: 2rem 5rem;
    width: 100%;
    max-width: 490px;


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
    padding: 1rem 2rem;

    & > p {
      position: absolute;
      top: 50px;
      right: 30px;
    }

  }
}
`


