import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import { FaChevronDown } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa';
import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavMenuLeft,
  NavBtn,
  NavBtnLink,
  NavMenuRight,
  NavDropdown,
  NavDropdownContent,
  NavIcon,
  MobileLink,
  Bars,
  MobileNavContainer,
} from './styles/Nav.styled';

const Navbar = ({childToParent}) => {
  return (
    <>
      <Nav>
        <Bars><FaBars></FaBars>
        <MobileNavContainer>
          <MobileLink to='/' activestyle="true">
            Home
          </MobileLink>
          <MobileLink to='/services' activestyle="true">
            Services&nbsp;<FaChevronDown />
          </MobileLink>
            <MobileLink to='/services/consultingdevelopment' activestyle="true">
            -&nbsp;Consulting and Development
            </MobileLink>
            <MobileLink to='/services/projectmanagement' activestyle="true">
            -&nbsp;Project Management
            </MobileLink>
            <MobileLink to='/services/engineering' activestyle="true">
            -&nbsp;Design and Engineering
            </MobileLink>
          <MobileLink to='/projects' activestyle="true">
            Projects&nbsp;<FaChevronDown />
          </MobileLink>
            <MobileLink to='/projects/ethylene' activestyle="true">
            -&nbsp;Purity Ethylene Pipeline System
            </MobileLink>
            <MobileLink to='/projects/ethane' activestyle="true">
            -&nbsp;Purity Ethane Pipeline System
            </MobileLink>
            <MobileLink to='/projects/ammonia' activestyle="true">
            -&nbsp;Ammonia Pipeline System
            </MobileLink>
            <MobileLink to='/projects/helium' activestyle="true">
            -&nbsp;Helium Pipeline
            </MobileLink>
            <MobileLink to='/projects/lngl' activestyle="true">
            -&nbsp;Liquified Natural Gas Loading Pipelines
            </MobileLink>
          <MobileLink to='/about' activestyle="true">
            About
          </MobileLink>
          <MobileLink to='/contact' activestyle="true">
            Contact
          </MobileLink>
        </MobileNavContainer>
        </Bars>
        <NavMenuLeft>
          <NavLink to='/' activestyle="true">
            <NavIcon src={'logo1.png'} />
          </NavLink>
        </NavMenuLeft>
        <NavMenu>
          <NavLink to='/' activestyle="true">
            Home
          </NavLink>
        <NavLink to='/prayers' activestyle="true">
            Prayers
        </NavLink>
        <NavLink to='/testimonies' activestyle="true">
            Testimonies
        </NavLink>
        <NavLink to='/guestPrayer' activestyle="true">
            Create Prayer
        </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavMenuRight>
            <NavLink to='/signup' activestyle="true">
                Sign Up
            </NavLink>
        </NavMenuRight>
      </Nav>
    </>
  );
};
  
export default Navbar;