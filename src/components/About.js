import styled from "styled-components";

import Reward from "./Reward";

const About = ({
  descriptionFirst,
  descriptionSecond,
  rewards,
  setRewards,
  loadDetailHandler,
}) => {
  return (
    <AboutContainer>
      <h2>About this project</h2>
      <p>{descriptionFirst}</p>
      <p>{descriptionSecond}</p>

      {rewards.map((reward) => {
        return (
          <Reward
            key={reward.id}
            id={reward.id}
            name={reward.name}
            minimumPrice={reward.minimumPrice}
            description={reward.description}
            leftNumber={reward.left}
            setRewards={setRewards}
            loadDetailHandler={loadDetailHandler}
          />
        );
      })}
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  margin-top: 1.5rem;
  background: white;
  border-radius: 8px;
  padding: 2.5rem 2rem;

  h2 {
    padding-bottom: 2rem;
  }

  p {
    padding-bottom: 2rem;
  }

  @media (max-width: 599px) {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
  }
  @media (max-width: 350px) {
    padding: 2rem 0.5rem 1.5rem 0.5rem;
  }
`;

export default About;
