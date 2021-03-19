import styled from "styled-components";
import { useState } from "react";

import Nav from "./components/Nav";
import ProjectInformation from "./components/ProjectInformation";
import Dashboard from "./components/Dashboard";
import About from "./components/About";

import hero_mobile from "./images/image-hero-mobile.jpg";
import hero_desktop from "./images/image-hero-desktop.jpg";
import logo_mastercraft from "./images/logo-mastercraft.svg";

function App() {
  const [backedMoney, setBackedMoney] = useState("89,914");
  const [totalMoney, setTotalMoney] = useState("100,000");
  const [backers, setBackers] = useState("5,007");
  const [leftDay, setLeftDay] = useState("56");
  return (
    <Home>
      <Header>
        <Nav />
      </Header>
      <Main>
        <Content>
          <ProjectInformation logo={logo_mastercraft} />
          <Dashboard
            backedMoney={backedMoney}
            totalMoney={totalMoney}
            backers={backers}
            leftDay={leftDay}
          />
          <About
            descriptionFirst="  The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
  to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
  your posture and make you more comfortable while at work, helping you stay focused on the task at hand."
            descriptionSecond="Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
  to allow notepads, pens, and USB sticks to be stored under the stand."
          />
        </Content>
      </Main>
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
  min-height: calc(100vh - 20rem);
  background-color: hsl(0, 0%, 96%);
`;
const Content = styled.div`
  width: 45rem;
  max-width: 90%;
  position: absolute;
  top: -5rem;
  left: 50%;
  transform: translateX(-50%);

  margin: auto;

  /* background-color: red; */
`;

export default App;
