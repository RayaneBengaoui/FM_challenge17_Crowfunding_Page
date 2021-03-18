import styled from "styled-components";

import logo from "../images/logo.svg";
import hamburger_img from "../images/icon-hamburger.svg";

const MobileMenu = () => {
  return (
    <MenuContainer>
      <OptionContainer>
        <ul>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </OptionContainer>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  position: absolute;
  top: 0rem;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
  @media (min-width: 600px) {
    display: none;
  }
`;
const OptionContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 6.5rem;
  border-radius: 10px;

  background-color: white;
  ul {
    color: black;

    li {
      padding: 1.5rem;
      font-size: 1.2rem;
      font-weight: 700;

      &:nth-child(-n + 2) {
        border-bottom: solid lightgray 1px;
      }
    }
  }
`;

export default MobileMenu;
