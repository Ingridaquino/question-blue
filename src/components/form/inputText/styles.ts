import styled from "styled-components"

export const InputContainer = styled.div`
      padding: 0.70rem 1.2rem;
      margin: 1rem 0 2rem 0;
      background-color: #252b4e;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: start;
      border-radius: 4px;
      
      .icon{
        color: #7C7C8A;
      }
`

export const Input = styled.input`
      width: 390px;
      padding: .50rem 0;
      background-color: transparent;
      display: inline-block;
      box-sizing: border-box;
      border: 0;
      outline: none;
      margin-left: 12px;
      color:#7C7C8A ;
      font-size: 1rem;

      &::placeholder {
        font-weight: 500;
        line-height: 15px;
        font-size: 0.875rem;
        color: #7C7C8A;
        text-align: start;
        display: block;
      }

`

// // export const HelperTex = styled.span`
// //   font-size: 0.75rem;
// //   font-weight: 400;
// //   color: white;
// `
