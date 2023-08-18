import styled from "styled-components";


export const Check = styled.div`
    box-sizing: border-box;
    border: 3px solid #777; 
    position: absolute;
    top: 2px;
    left: 2px;
    height: 22px;
    width: 22px;
    background-color: #eee;

    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`;

export const Default = styled.input`
    ${props => props.type === 'checkbox' && `
    background-color: #f00;
    display: none;`}
`;

export const CaptchaBox = styled.label`
    height: 185px;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    
    display:none;
`;

export const FailedCaptcha = styled.div`
  display: ${({ isFailed }) => isFailed ? 'flex' : 'none'};
  flex-direction: column;
  transition: display 1s;
  opacity: 1;
  transition: opacity 1s linear;
`;


export const CheckBox = styled.div`
    padding-left: 40px;
`;

export const Box = styled.label`
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /*
    display: flex;
    align-items: center;
    justify-content: center;*/
    width: 100%;
    box-sizing: border-box;
    border: 3px solid #777; 

    &:hover {
    }
    &:hover ${Default} ~ ${CheckBox} ${Check} {
        border: 3px solid #111; 
        background-color: #555;
    }

    & ${Default}:checked ~ ${CheckBox} ${Check}{
        background-color: #2196F3;
    }

    & ${Default}:checked ~ ${CheckBox} ${Check}:after {
        display: block;
    }

    & ${CheckBox} ${Check}:after {
        left: 6px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }



    & ${Default}:checked ~ ${CaptchaBox}{
        display: block;
    }
    
    & ${Default}:checked ~ ${CheckBox} {
        display: none;
    }
    
    display: ${({ isClicked }) => isClicked ? 'none' : 'block'};
`;

export const Message = styled.div`
    border: none;
    margin: none;
    font-size: 14px;
    color: black;
`;

export const Image = styled.img`
    box-sizing: border-box;
    border: 5px solid #111;
    height: 80px;
`;

export const Input = styled.input`
    box-sizing: border-box;
    border: 3px solid #777;
    width: 98%;
    padding: 10px 5px;
    font-size: 16px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
    &:focus {
    border: 3px solid #111;
    }
`;

export const SubmitCaptcha = styled.button`
    background-color: #fff;
    margin: 15px 0px;
    margin-top: 0;
    border: 3px solid #777;
    width: 98%;
    font-size: 1.15em;
    bottom: 0;
    &:hover {
        background-color: #555;
        color:#fff;
        border: 3px solid #333;
    }
`;