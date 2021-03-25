import styled from "styled-components";
import { useState, useRef } from "react";

import { numberWithCommas } from "../utils";

const RewardPanel = ({
  id,
  name,
  minimumPrice,
  description,
  leftNumber,
  setRewards,
  rewards,
  setBackers,
  setBackedMoney,
  setBackPanel,
  setCompletedModal,
}) => {
  const [isToggled, setIsToggled] = useState(false);
  const [isValidInput, setIsValidInput] = useState(true);

  const numberInput = useRef(null);

  const handlePayment = () => {
    if (numberInput.current.value === "") {
      setIsValidInput(false);
      return;
    }

    // Update the number of rewards in the BackPanel
    let rewards_copy = [...rewards];
    for (let key in rewards_copy) {
      if (rewards_copy[key].id === id) {
        rewards_copy[key].left -= 1;
        rewards_copy[key].left = rewards_copy[key].left.toString();
      }
    }
    setRewards(rewards_copy);

    // Update the number of Backers in the Dashboard
    setBackers((prevState) =>
      numberWithCommas(+prevState.replace(",", "") + 1)
    );

    // Update the amount of money backed in the dashboard
    setBackedMoney((prevState) =>
      numberWithCommas(
        +prevState.replace(",", "") + Number(numberInput.current.value)
      )
    );
    document.body.style.overflow = "auto";
    setBackPanel(false);
    setCompletedModal(true);
  };

  return (
    <RewardContainer
      leftNumber={leftNumber}
      isToggled={isToggled}
      className="reward"
    >
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
          <InputContainer isValidInput={isValidInput}>
            <p>$</p>
            <input type="number" ref={numberInput} min={minimumPrice} />
          </InputContainer>
          <SubmitButton onClick={handlePayment}>Continue</SubmitButton>
        </SubmitContainer>
      </RewardOpen>
    </RewardContainer>
  );
};

const RewardContainer = styled.div`
  position: relative;
  border-radius: 10px;

  border: ${(props) =>
    props.isToggled ? "solid hsl(176, 50%, 47%) 2px" : "solid lightgray 1px"};

  margin-bottom: 1.5rem;
  opacity: ${(props) => (props.leftNumber !== "0" ? "1" : "0.5")};
  pointer-events: ${(props) => (props.leftNumber !== "0" ? "auto" : "none")};
`;
const RewardClose = styled.div`
  padding: 2rem 1.5rem;
  padding-bottom: 1rem;
  cursor: pointer;

  :hover {
    .outer-circle {
      border-color: hsl(176, 50%, 47%);
    }
    h3 {
      color: hsl(176, 50%, 47%);
    }
  }

  @media (min-width: 599px) {
    > p {
      padding-left: 3rem;
    }
  }
`;

const FlexContainerTop = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1rem;
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
  border: ${(props) =>
    props.isValidInput ? "solid lightgray 1px" : "solid red 1px"};
  border-radius: 3rem;
  padding: 0rem 1rem;
  display: flex;
  align-items: center;

  flex-basis: 30%;
  margin-right: 1.5rem;

  :focus-within {
    border: solid lightgray 1px;
    p {
      color: lightgray;
    }
  }

  p {
    color: ${(props) => (props.isValidInput ? "lightgray" : "red")};
    font-weight: 700;
  }
  input {
    margin-left: 0.5rem;
    width: 100%;
    font-weight: 700;
    color: black;

    /* Chrome, Safari, Edge, Opera */
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    [type="number"] {
      -moz-appearance: textfield;
    }
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
  transition: background-color 0.4s ease;

  :hover {
    background-color: hsl(176, 72%, 28%);
  }

  @media (min-width: 750px) {
    flex-basis: 35%;
  }
`;

export default RewardPanel;
