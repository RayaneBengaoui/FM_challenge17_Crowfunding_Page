import styled from "styled-components";

import RewardPanel from "./RewardPanel";

const BackPanel = ({ rewards, setRewards, setBackPanel }) => {
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      setBackPanel(false);
    }
  };
  return (
    <BackPanelContainer className="shadow" onClick={exitDetailHandler}>
      <RewardContainer>
        {rewards.map((reward) => {
          return (
            <RewardPanel
              id={reward.id}
              name={reward.name}
              minimumPrice={reward.minimumPrice}
              description={reward.description}
              leftNumber={reward.left}
              setRewards={setRewards}
            />
          );
        })}
      </RewardContainer>
    </BackPanelContainer>
  );
};

const BackPanelContainer = styled.div`
  position: fixed;
  overflow-y: scroll;
  min-height: 100vh;
  width: 100%;
  z-index: 200;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: hsl(176, 50%, 47%);
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const RewardContainer = styled.div`
  position: absolute;
  width: 80%;
  left: 10%;

  top: 10%;
  background-color: white;
  border-radius: 10px;
`;

export default BackPanel;
