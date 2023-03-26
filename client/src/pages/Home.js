import "../App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {SectionsContainer, Section} from 'react-fullpage';
import HomeBack from "../components/Board/HomeBack";
import styled from "styled-components";

const SectionTwo = styled.div`
  background-color: #3FBED3;
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
        <Header />
          <HomeBack />
        </Section>
        <SectionTwo>
          {/* 섹션 2의 내용 */}
        </SectionTwo>
        <Section>
          {/* 섹션 3의 내용 */}
          <Footer />

        </Section>
      </SectionsContainer>
    </>
  );
}

export default Home;
