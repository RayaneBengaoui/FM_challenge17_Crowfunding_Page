import styled from "styled-components";
import { useState } from "react";

import MobileMenu from "./MobileMenu";

import logo from "../images/logo.svg";
import hamburger_icon from "../images/icon-hamburger.svg";
import close_menu_icon from "../images/icon-close-menu.svg";

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <Navigation>
      {mobileMenu ? <MobileMenu /> : ""}

      <Logo>
        <img src={logo} alt="crowdfund logo" />
      </Logo>
      <Options>
        <Mobile onClick={() => setMobileMenu((prevState) => !prevState)}>
          <img
            src={mobileMenu ? close_menu_icon : hamburger_icon}
            alt="hamburger navigation"
          />
        </Mobile>
        <Desktop>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </Desktop>
      </Options>
    </Navigation>
  );
};

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;

  padding: 3rem 2rem;
  max-width: 75rem;
  margin: auto;
`;

const Logo = styled.div`
  z-index: 150;
`;
const Options = styled.div`
  z-index: 150;
`;
const Mobile = styled.div`
  @media (max-width: 599px) {
    display: block;
  }
  @media (min-width: 600px) {
    display: none;
  }
`;
const Desktop = styled.ul`
  @media (max-width: 599px) {
    display: none;
  }
  @media (min-width: 600px) {
    min-width: 17rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Nav;
