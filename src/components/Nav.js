import styled from "styled-components";

import logo from "../images/logo.svg";
import hamburger_img from "../images/icon-hamburger.svg";

const Nav = () => {
  return (
    <Navigation>
      <div className="logo">
        <img src={logo} alt="crowdfund logo" />
      </div>
      <Options>
        <Mobile>
          <img src={hamburger_img} alt="hamburger navigation" />
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

const Options = styled.div``;
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
