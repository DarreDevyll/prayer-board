import styled from "styled-components";

export const StyledForm = styled.form`
  border: 3px solid #000;
  background-color: #111;
  color: #fff;
  
  display: ${({show}) => show ? 'none' : 'flex'};
  flex-direction: column;

  @media screen and (max-width: 400px){
      width: 90%;
      margin: auto;
    }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px 10px;
`;

export const Label = styled.div`
  float: left;
  text-align: left;
`;

export const Field = styled.input`

`;

export const FieldDescription = styled.div`
  display: flex;
  flex-direction: column;
  transition: display 1s;
  opacity: 0;
  transition: opacity 1s linear;

  ${Label}:hover ~ & {
    opacity: 1;
    transition: opacity 1s linear;
  }

  &:hover {
    opacity: 1;
    transition: opacity 1s linear;
  }

`;

export const SelectionField = styled.select`
  width: 100%;
`;

export const SelectOption = styled.option`

`;

export const DropdownMenu = styled.div`
`;


export const Submit = styled.input`
  width: 50%;
  margin: auto;

  @media screen and (max-width: 400px){
    width: 100%;
    //margin: auto;
  }
`;

export const CompletedFormMessage = styled.div`
  display: ${({show}) => show ? 'flex' : 'none'};
`;

export const Req = styled.span`
  color: #a00;
`;