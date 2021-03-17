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
  border-radius: 8px;
  background-color: white;
  overflow: hidden;
`;
const LogoContainer = styled.div`
  position: absolute;
  z-index: 15;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    padding-top: 3rem;
    padding-bottom: 1rem;
  }

  p {
    color: hsl(0, 0%, 48%);
    font-weight: 500;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 2rem;
`;
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
