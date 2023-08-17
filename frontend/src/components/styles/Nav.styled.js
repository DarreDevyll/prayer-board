import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #82592d;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 10px 10px 0px #000;
  padding: 0 5%;
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;
  
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Futura', sans-serif;
  cursor: pointer;
  &.active {
    color: #ffa;

    &:hover{
      color: #fff;
    }
  }
  &:hover {
    //color: #97C1E6;
    background-color: #822e2d;
  }
`;
  
export const NavMenuLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content:left;
  margin-right: 0px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`; 

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-right: 0px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const NavDropdown = styled.div`
  position: relative;
  height: 100%;
  display: inline-block;
`

export const NavDropdownContent = styled.div`
  display: none;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  background: rgba(0, 62, 216, 0.70);
  backdrop-filter: blur(3px);
  //background: #003Ed8;
  justify-content: left;
  ${NavLink} {
    font-size: 18px;
    font-weight: 400;
    //width: 250px;
    padding: 20px 20px;
    white-space: nowrap;
    justify-content: left;
    z-index: 0;
    border-left: 10px solid #97C1E6;
    &:hover {
      margin-left: 7px;
      border-left: 0px solid transparent;// #000;
      border-right: 3px solid #003E78;
      box-shadow: 0px 4px 8px 0px #000,
      -7px 0px 0px 0px #97C1E6;
      z-index: 1;
    }
    //border-bottom: 2px solid #001E40;
  }

  ${NavLink}:hover ~ & {
    display: flex;
    flex-direction:column;
  }
  &:hover {
    display:flex;
    flex-direction:column;
  }
`

export const MobileLink = styled(Link)`
  display: flex;
  color: #fff;
  //display: flex;
  align-items: center;
  justify-content: left;
  text-decoration: none;
  padding: 0 1rem;
  height: 35px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Futura', sans-serif;
  cursor: pointer;
  &.active {
    color: #0fd;

    &:hover{
      color: #fff;
    }
  }
  &:hover {
    //color: #97C1E6;
    background-color: #003E78;
  }
`;

export const MobileNavContainer = styled.div`
  display: none;
  width: 100%;
  flex-direction: column;
  justify-content: left;
  align-content: space-between;
  background: rgba(0, 62, 120, 0.90);
  backdrop-filter: blur(3px);
  box-shadow: 1px 10px 10px 0 #013;
`

 //(FaBars)`
export const Bars = styled.div`
  display: none;
  color: #808080;
  svg {
    margin: 10px 10px;
  }
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px 10px;
    //transform: translate(-100%, 75%);
    font-size: 1.8rem;
    //cursor: pointer;
    //background-color: #003Ed8;
  }

  &:hover {
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    //position: relative;
    color: #0fd;
    margin: auto;
    ${MobileNavContainer} {
      display: flex;
    }

  }
`;

export const NavIcon = styled.img`
  height: 100%;
  display: inline;
  //width: 75px;
  float: left;
  //transform: rotate( ${({angle}) => angle || '0deg'});
`;