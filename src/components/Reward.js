import styled from "styled-components";

const Reward = ({
  id,
  name,
  minimumPrice,
  description,
  leftNumber,
  setRewards,
}) => {
  return (
    <RewardContainer leftNumber={leftNumber}>
      <h3>{name}</h3>
      <PledgeText>{`Pledge $${minimumPrice} or more`}</PledgeText>
      <p>{description}</p>
      <LeftText>
        <span>{leftNumber}</span>left
      </LeftText>
      <SelectButton leftNumber={leftNumber}>
        {leftNumber === "0" ? "Out of stock" : "Select Reward"}
      </SelectButton>
    </RewardContainer>
  );
};

const RewardContainer = styled.div`
  border-radius: 10px;
  border: solid lightgray 1px;
  padding: 2rem 1.5rem;
  margin-bottom: 1.5rem;
  opacity: ${(props) => (props.leftNumber !== "0" ? "1" : "0.5")};
`;
const PledgeText = styled.p`
  padding-top: 0.3rem;
  color: hsl(176, 50%, 47%);
  font-weight: 500;
`;
const LeftText = styled.p`
  display: flex;
  align-items: center;
  span {
    font-weight: 700;
    color: black;
    font-size: 2rem;
    padding-right: 0.4rem;
  }
`;

const SelectButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${(props) =>
    props.leftNumber !== "0" ? "hsl(176, 50%, 47%)" : "gray"};
  color: white;
  border-radius: 3rem;
  font-weight: 700;

  @media (max-width: 350px) {
    padding: 1rem 1rem;
  }
`;

export default Reward;
