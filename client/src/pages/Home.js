import LandingHeader from "../components/Header/LandingHeader";
import LandingFooter from "../components/Footer/LandingFooter";
import {SectionsContainer, Section} from 'react-fullpage';
import HomeBack from "../components/Board/HomeBack";
import HomeBack2 from "../components/Board/HomeBack2";
import HomeBack3 from "../components/Board/HomeBack3";
import styled from "styled-components";

const SectionTwo = styled.div`
  background-color: #7BC4C4;
  background-size: cover;
  height: 100vh;
`;

function Home() {
  const options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
    navigation: false,
  };
  return (
    <>
      
      <SectionsContainer {...options}>
        <Section>
        <LandingHeader />
          <HomeBack />
        </Section>
        <SectionTwo>
          <HomeBack2 />
        </SectionTwo>
        <SectionTwo>
          <HomeBack3 />
          <LandingFooter />
        </SectionTwo>
      </SectionsContainer>
    </>
  );
}

export default Home;
