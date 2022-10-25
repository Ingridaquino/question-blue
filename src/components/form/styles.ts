import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-top: 6rem;
`;

export const FormLogin = styled.div`
padding: 2rem;

span {
   display: block;
   font-size: 0.75rem;
   text-align: end;
   color:#7C7C8A;
}


form {
  margin-top: 4rem;

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
    padding-top: 10rem;
  }
}


@media(max-width: 996px){
    & {
    margin-top: -30px;
    width: 80%;

    span {
      position: absolute;
      top: 50px;
      right: 30px;
    }

    form {
    }
  }
}
`

export const Submit = styled.button`
    width: 426px;
    height: 56px;
    padding: 0.75rem 2rem;
    margin-top: 70px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    font-family: 'Inter';
    background-color:#3168F6;
    text-transform:uppercase;

    border: none;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)

`
