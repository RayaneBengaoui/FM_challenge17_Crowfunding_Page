import styled from "styled-components";

import hero_mobile from "./images/image-hero-mobile.jpg";
import hero_desktop from "./images/image-hero-desktop.jpg";

function App() {
  return (
    <Home>
      <Header></Header>
      <main></main>
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

export default App;
