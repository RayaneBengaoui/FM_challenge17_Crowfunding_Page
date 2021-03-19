import styled from "styled-components";

import Reward from "./Reward";

const About = ({
  descriptionFirst,
  descriptionSecond,
  rewards,
  setRewards,
}) => {
  return (
    <AboutContainer>
      <h2>About this project</h2>
      <p>{descriptionFirst}</p>
      <p>{descriptionSecond}</p>
      <Reward
        name="Bamboo Stand"
        minimumPrice="25"
        description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list."
        leftNumber={rewards[0]}
        setRewards={setRewards}
      />
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  margin-top: 1.5rem;
  background: white;
  border-radius: 8px;
  padding: 2.5rem 2rem;

  @media (max-width: 599px) {
    padding: 0 1.5rem 1.5rem 1.5rem;
  }
  @media (max-width: 350px) {
    padding: 0 0.5rem 1.5rem 0.5rem;
  }
`;

export default About;
