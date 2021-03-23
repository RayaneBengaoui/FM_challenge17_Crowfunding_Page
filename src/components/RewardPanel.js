import styled from "styled-components";
import { useState } from "react";

const RewardPanel = ({
  id,
  name,
  minimumPrice,
  description,
  leftNumber,
  setRewards,
}) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <RewardContainer leftNumber={leftNumber}>
      <RewardClose onClick={() => setIsToggled((prevToggle) => !prevToggle)}>
        <FlexContainerTop>
          <CircleButton isToggled={isToggled}>
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
          </CircleButton>
          <FlexContainer>
            <h3>{name}</h3>
            <PledgeText>{`Pledge $${minimumPrice} or more`}</PledgeText>
          </FlexContainer>
        </FlexContainerTop>
        <p>{description}</p>

        <LeftText>
          <span>{leftNumber}</span>left
        </LeftText>
      </RewardClose>
      <RewardOpen isToggled={isToggled}>
        <p>Enter your pledge</p>
        <SubmitContainer>
          <InputContainer>
            <p>$</p>
            <input type="text" />
          </InputContainer>
          <SubmitButton>Continue</SubmitButton>
        </SubmitContainer>
      </RewardOpen>
    </RewardContainer>
  );
};

const RewardContainer = styled.div`
  position: relative;
  border-radius: 10px;
  border: solid lightgray 1px;

  margin-bottom: 1.5rem;
  opacity: ${(props) => (props.leftNumber !== "0" ? "1" : "0.5")};
`;
const RewardClose = styled.div`
  padding: 2rem 1.5rem;
  padding-bottom: 1rem;
  cursor: pointer;
`;

const FlexContainerTop = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1.5rem;
`;
const CircleButton = styled.div`
  .outer-circle {
    border: solid lightgray 1px;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    .inner-circle {
      transition: transform 0.3s ease-in-out;
      transform: ${(props) => (props.isToggled ? "scale(1)" : "scale(0)")};
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background-color: hsl(176, 50%, 47%);
    }
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1rem;

  @media (min-width: 599px) {
    flex-direction: row;
  }
`;

const PledgeText = styled.p`
  color: hsl(176, 50%, 47%);
  font-weight: 500;
  @media (min-width: 599px) {
    padding-left: 1rem;
  }
`;
const LeftText = styled.p`
  display: flex;
  align-items: center;
  padding-top: 1.5rem;
  span {
    font-weight: 700;
    color: black;
    font-size: 2rem;
    padding-right: 0.4rem;
  }
  @media (min-width: 750px) {
    position: absolute;
    top: -0.5rem;
    right: 1.5rem;
  }
`;

const RewardOpen = styled.div`
  border-top: solid lightgray 1px;
  transition: padding 0.3s ease-in-out, opacity 0.2s ease-in-out,
    max-height 0.3s ease-in-out;
  padding: ${(props) => (props.isToggled ? "2rem 1.5rem" : "0rem 0rem")};
  opacity: ${(props) => (props.isToggled ? "1" : "0")};
  max-height: ${(props) => (props.isToggled ? "250px" : "0px")};
  pointer-events: ${(props) => (props.isToggled ? "auto" : "none")};

  > p {
    text-align: center;
    padding-bottom: 1rem;
  }

  @media (min-width: 750px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > p {
      text-align: unset;
      padding-bottom: 0rem;
    }
  }
`;
const SubmitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 750px) {
    justify-content: flex-end;
  }
`;
const InputContainer = styled.div`
  border: solid lightgray 1px;
  border-radius: 3rem;
  padding: 0rem 1rem;
  display: flex;
  align-items: center;

  flex-basis: 30%;
  margin-right: 1.5rem;

  p {
    color: lightgray;
    font-weight: 700;
  }
  input {
    margin-left: 0.5rem;
    width: 100%;
    font-weight: 700;
    color: black;
  }

  @media (min-width: 750px) {
    flex-basis: 30%;
    margin-right: 1rem;
  }
`;
const SubmitButton = styled.button`
  flex-basis: 60%;
  padding: 1rem 2rem;
  background-color: hsl(176, 50%, 47%);
  color: white;
  border-radius: 3rem;
  font-weight: 700;

  @media (min-width: 750px) {
    flex-basis: 35%;
  }
`;

export default RewardPanel;
