import styled from "styled-components";
import { motion } from "framer-motion";
import { fade, fadeFromTopPercentage } from "../animation";

import RewardPanel from "./RewardPanel";
import NoReward from "./NoReward";

import cross_icon from "../images/icon-close-modal.svg";

const BackPanel = ({
  rewards,
  setRewards,
  setBackPanel,
  supportText,
  isOpen,
  setBackers,
  setBackedMoney,
  setCompletedModal,
}) => {
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (
      element.classList.contains("shadow") ||
      element.classList.contains("exit")
    ) {
      document.body.style.overflow = "auto";
      setBackPanel(false);
    }
  };

  return (
    <BackPanelContainer
      className="shadow"
      onClick={exitDetailHandler}
      variants={fade}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <RewardContainer variants={fadeFromTopPercentage}>
        <TopContainer>
          <h2>Back this project</h2>

          <img
            className="exit"
            onClick={exitDetailHandler}
            src={cross_icon}
            alt="exit cross"
          />
        </TopContainer>
        <p>{supportText}</p>

        <NoReward
          setBackers={setBackers}
          setBackedMoney={setBackedMoney}
          setBackPanel={setBackPanel}
          setCompletedModal={setCompletedModal}
        />
        {rewards.map((reward) => {
          return (
            <RewardPanel
              id={reward.id}
              name={reward.name}
              minimumPrice={reward.minimumPrice}
              description={reward.description}
              leftNumber={reward.left}
              setRewards={setRewards}
              rewards={rewards}
              setBackers={setBackers}
              setBackedMoney={setBackedMoney}
              setBackPanel={setBackPanel}
              setCompletedModal={setCompletedModal}
            />
          );
        })}
      </RewardContainer>
    </BackPanelContainer>
  );
};

const BackPanelContainer = styled(motion.div)`
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
const RewardContainer = styled(motion.div)`
  position: absolute;
  width: 45rem;
  left: 50%;
  transform: translateX(-50%);
  top: 10%;
  background-color: white;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  margin-bottom: 20rem;

  > p {
    padding-bottom: 2rem;
  }

  @media (max-width: 750px) {
    width: 80%;
    left: 10%;
    transform: unset;
  }

  @media (max-width: 599px) {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
  }
  @media (max-width: 350px) {
    padding: 2rem 0.5rem 1.5rem 0.5rem;
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  img {
    cursor: pointer;
  }
`;

export default BackPanel;
