import styled from "styled-components";

const Reward = ({
  name,
  minimumPrice,
  description,
  leftNumber,
  setRewards,
}) => {
  return (
    <RewardContainer>
      <h3>{name}</h3>
      <p>{`Pledge $${minimumPrice} or more`}</p>
      <p>{description}</p>
      <p>
        <span>{leftNumber}</span>left
      </p>
      <SelectButton onClick={() => {}}>Select Reward</SelectButton>
    </RewardContainer>
  );
};

const RewardContainer = styled.div`
  border-radius: 10px;
  border: solid lightgray 1px;
  padding: 2rem 1rem;
`;

const SelectButton = styled.button`
  padding: 1rem 2rem;
  background-color: hsl(176, 50%, 47%);
  color: white;
  border-radius: 3rem;
  font-weight: 700;

  @media (max-width: 350px) {
    padding: 1rem 1rem;
  }
`;

export default Reward;
