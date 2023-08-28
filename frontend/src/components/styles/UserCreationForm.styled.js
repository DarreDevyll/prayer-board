import styled from "styled-components";

export const StyledForm = styled.form`
  margin-top: 20px;
  box-shadow: 0px 0px 0px 3px #222, 0px 0px 0px 5px #555;
  background-color: #555;
  color: #fff;
  min-width: 50%;
  
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

export const TextField = styled.input`
  font-size: 1rem;
`;

export const TextareaField = styled.textarea`
  font-family: Arial, sans-serif;
  font-size: 1rem;
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