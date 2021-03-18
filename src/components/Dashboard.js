import styled from "styled-components";
import { useState, useEffect } from "react";

import logo from "../images/logo.svg";
import hamburger_img from "../images/icon-hamburger.svg";

const Dashboard = ({ backedMoney, totalMoney, backers, leftDay }) => {
  const [progressionBarValue, setprogressionBarValue] = useState(0);

  useEffect(() => {
    setprogressionBarValue(calculateProgressionValue());
  }, [backedMoney, totalMoney]);

  const calculateProgressionValue = () => {
    return (
      (+backedMoney.replace(",", ".") / +totalMoney.replace(",", ".")) * 100
    );
  };

  calculateProgressionValue();
  return (
    <DashboardContainer>
      <StatContainer>
        <Stats>
          <h1>{`$${backedMoney}`}</h1>
          <p>{`of $${totalMoney} backed`}</p>
        </Stats>
        <Stats>
          <h1>{backers}</h1>
          <p>total backers</p>
        </Stats>
        <Stats>
          <h1>{leftDay}</h1>
          <p>days left</p>
        </Stats>
      </StatContainer>
      <ProgressionBar max="100" value={progressionBarValue} />
    </DashboardContainer>
  );
};

const DashboardContainer = styled.section`
  margin-top: 1.5rem;
  background: white;
  border-radius: 8px;
  padding: 2.5rem 2rem;
  @media (max-width: 599px) {
    padding: 0 1.5rem;
  }
  @media (max-width: 350px) {
    padding: 0 0.5rem;
  }
`;
const StatContainer = styled.div`
  display: flex;
  @media (max-width: 599px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
const Stats = styled.div`
  flex: 0 0 30%;
  margin-right: 2rem;
  /* padding-right: 2rem; */

  p {
    padding-top: 0.3rem;
  }

  &:nth-child(-n + 2) {
    border-right: solid lightgray 1px;
  }

  @media (max-width: 599px) {
    margin: 1.5rem 0;
    &:nth-child(-n + 2) {
      border-right: none;
      position: relative;

      ::after {
        content: "";
        position: absolute;
        width: 5rem;
        height: 2px;
        bottom: -1.5rem;
        left: 50%;
        transform: translateX(-50%);
        background-color: lightgray;
      }
    }
  }
`;
const ProgressionBar = styled.progress`
  -webkit-appearance: none;
  color: hsl(176, 50%, 47%);
  border-radius: 10px;
  ::-webkit-progress-bar {
    background-color: #e9e9e9;
    border-radius: 10px;
  }

  ::-webkit-progress-value {
    background-color: hsl(176, 50%, 47%);
    border-radius: 10px;
  }
  ::-moz-progress-bar {
    background-color: hsl(176, 50%, 47%);
    border-radius: 10px;
  }
`;

export default Dashboard;
