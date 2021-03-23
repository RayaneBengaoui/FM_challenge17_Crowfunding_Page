import styled from "styled-components";

const RewardPanel = ({
  id,
  name,
  minimumPrice,
  description,
  leftNumber,
  setRewards,
}) => {
  return (
    <RewardContainer leftNumber={leftNumber}>
      {/* <RewardClose> */}
      <FlexContainerTop>
        <CircleButton>
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
      {/* </RewardClose> */}
    </RewardContainer>
  );
};

const RewardContainer = styled.div`
  position: relative;
  border-radius: 10px;
  border: solid lightgray 1px;
  padding: 2rem 1.5rem;
  margin-bottom: 1.5rem;
  opacity: ${(props) => (props.leftNumber !== "0" ? "1" : "0.5")};
`;
const RewardClose = styled.div``;

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
      display: none;
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
    top: 1rem;
    right: 1.5rem;
  }
`;

export default RewardPanel;
