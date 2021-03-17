import styled from "styled-components";

import logo from "../images/logo.svg";
import hamburger_img from "../images/icon-hamburger.svg";

const ProjectInformation = ({ logo }) => {
  return (
    <InformationContainer>
      <LogoContainer>
        <img src={logo} alt="company logo" />
      </LogoContainer>
      <TextContainer>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcraft monitor stand to reduce neck and eye strain
        </p>
      </TextContainer>
      <ButtonContainer>
        <BackButton />
        <BookmarkButton />
      </ButtonContainer>
    </InformationContainer>
  );
};

const InformationContainer = styled.section`
  width: 100%;

  border-radius: 8px;
  background-color: white;
  overflow: hidden;
`;
const LogoContainer = styled.div`
  position: absolute;
  z-index: 15;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
`;
const TextContainer = styled.div``;
const ButtonContainer = styled.div``;
const BackButton = styled.button``;
const BookmarkButton = styled.button``;

export default ProjectInformation;
