import styled from "styled-components";

import bookmark_icon from "../images/icon-bookmark.svg";

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
        <BackButton>Back this project</BackButton>
        <BookmarkButton>Bookmark</BookmarkButton>
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
const BackButton = styled.button`
  padding: 1rem 2rem;
  background-color: hsl(176, 50%, 47%);
  color: white;
  border-radius: 3rem;
  font-weight: 700;
`;
const BookmarkButton = styled.button`
  padding: 1rem 0;
  padding-left: 4rem;
  padding-right: 2rem;
  background-color: hsl(0, 0%, 90%);
  color: hsl(0, 0%, 48%);
  border-radius: 3rem;
  font-weight: 700;
  position: relative;
  margin-bottom: 2em;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 3.2rem;
    height: 3.2rem;
    background-color: black;
    background-image: url(${bookmark_icon});
    background-position: center;
    border-radius: 50%;
  }
`;

export default ProjectInformation;
