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
  @media (max-width: 599px) {
    padding: 0 1.5rem;
  }
  @media (max-width: 350px) {
    padding: 0 0.5rem;
  }
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

  @media (max-width: 599px) {
    text-align: center;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 2rem;
  @media (max-width: 599px) {
    padding: 2rem 0rem;
  }
`;
const BackButton = styled.button`
  padding: 1rem 2rem;
  background-color: hsl(176, 50%, 47%);
  color: white;
  border-radius: 3rem;
  font-weight: 700;

  @media (max-width: 350px) {
    padding: 1rem 1rem;
  }
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
  @media (max-width: 599px) {
    padding: 0;
    background-color: unset;
    color: white;
    margin-left: 1rem;
  }

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
    @media (max-width: 599px) {
      top: -100%;
    }
  }
`;

export default ProjectInformation;
