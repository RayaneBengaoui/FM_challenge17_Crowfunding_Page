import styled from "styled-components";
import { motion } from "framer-motion";
import { fade, fadeFromTopAbsolute } from "../animation";

const MobileMenu = () => {
  return (
    <MenuContainer variants={fade} initial="hidden" animate="show" exit="exit">
      <OptionContainer variants={fadeFromTopAbsolute}>
        <ul>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </OptionContainer>
    </MenuContainer>
  );
};

const MenuContainer = styled(motion.div)`
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
const OptionContainer = styled(motion.div)`
  width: 90%;
  margin: auto;
  margin-top: 6.5rem;
  border-radius: 10px;
  top: 5rem;

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
