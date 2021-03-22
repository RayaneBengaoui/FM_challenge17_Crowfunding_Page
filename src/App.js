import styled from "styled-components";
import { useState } from "react";

import Nav from "./components/Nav";
import ProjectInformation from "./components/ProjectInformation";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import BackPanel from "./components/BackPanel";

import { data } from "./data";

import hero_mobile from "./images/image-hero-mobile.jpg";
import hero_desktop from "./images/image-hero-desktop.jpg";

function App() {
  const project_kpi = data.kpi;
  const project_rewards = data.rewards;

  const [backedMoney, setBackedMoney] = useState(project_kpi.backedMoney);
  const [totalMoney, setTotalMoney] = useState(project_kpi.totalMoney);
  const [backers, setBackers] = useState(project_kpi.backers);
  const [leftDay, setLeftDay] = useState(project_kpi.leftDay);
  const [rewards, setRewards] = useState(project_rewards);
  const [backPanel, setBackPanel] = useState(false);

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    setBackPanel(true);
  };

  return (
    <Home>
      <Header>
        <Nav />
      </Header>
      <Main>
        <Content>
          <ProjectInformation data={data} />
          <Dashboard
            backedMoney={backedMoney}
            totalMoney={totalMoney}
            backers={backers}
            leftDay={leftDay}
          />
          <About
            descriptionFirst={data.firstDescription}
            descriptionSecond={data.secondDescription}
            rewards={rewards}
            setRewards={setRewards}
            loadDetailHandler={loadDetailHandler}
          />
        </Content>
      </Main>
      {backPanel ? (
        <BackPanel
          rewards={rewards}
          setRewards={setRewards}
          setBackPanel={setBackPanel}
          supportText={data.supportText}
        />
      ) : (
        ""
      )}
    </Home>
  );
}

const Home = styled.div`
  min-height: 100vh;
`;

const Header = styled.header`
  height: 20rem;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 375px) {
    background-image: url(${hero_mobile});
  }
  @media (min-width: 376px) {
    background-image: url(${hero_desktop});
  }
`;

const Main = styled.main`
  position: relative;
  min-height: 80vh;
  background-color: hsl(0, 0%, 96%);
`;
const Content = styled.div`
  width: 45rem;
  max-width: 90%;
  transform: translateY(-10rem);
  margin: auto;
`;

export default App;
