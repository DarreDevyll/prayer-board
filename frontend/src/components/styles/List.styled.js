import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  margin: 15px 0px;
  padding: 40px 20px;
  background-color: #aaa;
  color: #000;

  &:hover {
    transition: box-shadow 1s;
  box-shadow: 0px 1px 10px 0px #fff, 0px 3px 10px 0px #ffd, 0px 5px 20px 5px #fd6;
  }
`

export const Prayer = styled.div`
  width: 100%;
`

export const Title = styled.div`
  font-size: 36px;
`

export const Description = styled.div`
  font-size: 24px;
`

export const Footer = styled.div`
  width: 100%;
`

export const Author = styled.div`
  font-size: 16px;
  width: 100%;
  text-align: right;
  color: #822e2d;
`

export const Date = styled.div`
  font-size: 16px;
  width: 100%;
  text-align: right;
`