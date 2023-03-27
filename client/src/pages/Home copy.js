import LandingHeader from "../components/Header/LandingHeader";
import Footer from "../components/Footer/Footer";
import {SectionsContainer, Section} from 'react-fullpage';
import HomeBack from "../components/Board/HomeBack";
import HomeBack2 from "../components/Board/HomeBack2";
import styled from "styled-components";

const SectionTwo = styled.div`
  background-color: #3FBED3;
  background-size: cover;
  height: 100vh;
`;

const SectionThree = styled.div`
  background-color: #FFFFFF;
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
        <LandingHeader />
          <HomeBack2 />
        </SectionTwo>
        <SectionThree>
          {/* 섹션 3의 내용 */}
          <Footer />

        </SectionThree>
      </SectionsContainer>
    </>
  );
}

export default Home;
