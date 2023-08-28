import { styled, keyframes } from "styled-components";

export const Card = styled.div`
  max-Height: 400px;
  display: flex;
  flex-direction:row;
  justify-content: space-evenly;
  background-color: #333;
  padding: 15px 10px;
  border-radius: 15px;
  margin-top: 20px;
`;

export const CardText = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const CardTitle = styled.div`
  width: 100%;
  font-size: 30px;
  margin: 10px 15px;
`

export const CardBody = styled.div`
  width: 100%;
  font-size: 20px;
  margin: 7px 15px;
`

export const CardImage = styled.div`
  max-width: 40%;
  max-height: 80%;
`
const gradient = keyframes`
0% {
  //background-position: 45% 50%;
  opacity: 1;
}
50% {
  //background-position: 55% 50%;
  opacity: 0.2;
}
100% {
  //background-position: 45% 50%;
  opacity: 1;
}
`;

export const ImageContainer = styled.div`
  animation: ${gradient} 5s ease-in-out infinite;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2), rgba(239, 211, 117, 0.4) 40%, rgba(51, 51, 51, 1) 70%);
  height: 100%;
  margin: 0px 15px;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`

export const Image = styled.img`
  position: relative;
  top: -320px;
  right: -90px;
  z-index: 0;
  opacity: 1;
  max-height: 100%;
  max-width: 60%;
  margin: 0px 15px;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  //box-shadow: 0px 1px 10px 0px #fff, 0px 3px 10px 0px #ffd, 0px 5px 20px 5px #fd6;
`


export const AnimatedGradientText = styled.h1`
  animation: ${gradient} 5s ease-in-out infinite;
  background: radial-gradient(circle, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
  background-size: 300%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;