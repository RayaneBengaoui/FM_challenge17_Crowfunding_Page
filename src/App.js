import styled from "styled-components";

import Nav from "./components/Nav";
import ProjectInformation from "./components/ProjectInformation";

import hero_mobile from "./images/image-hero-mobile.jpg";
import hero_desktop from "./images/image-hero-desktop.jpg";
import logo_mastercraft from "./images/logo-mastercraft.svg";

function App() {
  return (
    <Home>
      <Header>
        <Nav />
      </Header>
      <Main>
        <Content>
          <ProjectInformation logo={logo_mastercraft} />
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

  background-color: red;
`;

export default App;
