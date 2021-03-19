import styled from "styled-components";

const About = ({ descriptionFirst, descriptionSecond }) => {
  return (
    <AboutContainer>
      <h2>About this project</h2>
      <p>{descriptionFirst}</p>
      <p>{descriptionSecond}</p>
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
