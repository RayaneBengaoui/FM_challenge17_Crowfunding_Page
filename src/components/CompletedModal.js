import styled from "styled-components";
import { motion } from "framer-motion";
import { fade, fadeCompletedModal } from "../animation";

import check_icon from "../images/icon-check.svg";

const CompletedModal = ({ name, setCompletedModal }) => {
  return (
    <CompletedModalContainer
      variants={fade}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Modal variants={fadeCompletedModal}>
        <img src={check_icon} alt="check" />
        <h2>Thanks for your support !</h2>
        <p>
          {`Thanks for your support! Your pledge brings us one step closer to
            sharing ${name} worldwide. You will get an
            email once our campaign is completed. Got it!`}
        </p>
        <SubmitButton onClick={() => setCompletedModal(false)}>
          Got it!
        </SubmitButton>
      </Modal>
    </CompletedModalContainer>
  );
};

const CompletedModalContainer = styled(motion.div)`
  position: fixed;

  min-height: 100vh;
  width: 100%;
  z-index: 200;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;
const Modal = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  left: 10%;
  transform: translateY(-50%);

  background-color: white;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  text-align: center;

  img {
    margin-bottom: 1rem;
  }

  p {
    padding: 1.5rem 0;
  }

  @media (min-width: 750px) {
    width: 35rem;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SubmitButton = styled.button`
  /* align-self: stretch; */
  width: 8rem;
  padding: 1rem 2rem;
  background-color: hsl(176, 50%, 47%);
  color: white;
  border-radius: 3rem;
  font-weight: 700;
`;

export default CompletedModal;
