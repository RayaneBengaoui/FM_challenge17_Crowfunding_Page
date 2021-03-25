import { useState } from "react";
import styled from "styled-components";

import bookmark_icon from "../images/icon-bookmark.svg";
import bookmark_completed_icon from "../images/icon-bookmark-complete.svg";

const ProjectInformation = ({ data, loadDetailHandler }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <InformationContainer>
      <LogoContainer>
        <img src={data.logo} alt="company logo" />
      </LogoContainer>
      <TextContainer>
        <h1>{data.name}</h1>
        <p>{data.intro}</p>
      </TextContainer>
      <ButtonContainer>
        <BackButton onClick={loadDetailHandler}>Back this project</BackButton>
        <BookmarkButton
          isBookmarked={isBookmarked}
          onClick={() => setIsBookmarked((prevState) => !prevState)}
        >
          {isBookmarked ? "Bookmarked" : "Bookmark"}
        </BookmarkButton>
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
  transition: background-color 0.4s ease;

  :hover {
    background-color: hsl(176, 72%, 28%);
  }

  @media (max-width: 350px) {
    padding: 1rem 1rem;
  }
`;
const BookmarkButton = styled.button`
  padding: 1rem 0;
  padding-left: 4rem;
  padding-right: 2rem;
  width: 11rem;
  background-color: hsl(0, 0%, 90%);
  color: ${(props) =>
    props.isBookmarked ? "hsl(176, 72%, 28%)" : "hsl(0, 0%, 48%)"};
  border-radius: 3rem;
  font-weight: 700;
  position: relative;
  @media (max-width: 599px) {
    width: unset;
    padding: 0;
    background-color: unset;
    color: transparent;
    width: 0rem;
    margin-left: 1rem;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 3.2rem;
    height: 3.2rem;

    background-image: ${(props) =>
      props.isBookmarked
        ? `url(${bookmark_completed_icon})`
        : `url(${bookmark_icon})`};
    background-position: center;
    border-radius: 50%;
    @media (max-width: 599px) {
      top: -100%;
      left: -4rem;
    }
  }
`;

export default ProjectInformation;
