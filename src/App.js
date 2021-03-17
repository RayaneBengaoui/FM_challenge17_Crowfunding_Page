import styled from "styled-components";

import Nav from "./components/Nav";

import hero_mobile from "./images/image-hero-mobile.jpg";
import hero_desktop from "./images/image-hero-desktop.jpg";

function App() {
  return (
    <Home>
      <Header>
        <Nav />
      </Header>
      <Main>
        <Content></Content>
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
`;
const Content = styled.div``;

export default App;
