import LandingHeader from "../components/Header/LandingHeader";
import LandingFooter from "../components/Footer/LandingFooter";
import { SectionsContainer, Section } from 'react-fullpage';
import HomeBack from "../components/Board/HomeBack";
import HomeBack2 from "../components/Board/HomeBack2";
import HomeBack3 from "../components/Board/HomeBack3";
import styled from "styled-components";

function Home() {
  const options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
    navigation: true,
    
    afterLoad: (origin, destination, direction) => {
      // 슬라이드 애니메이션을 적용할 이미지 요소 선택
      const currentSection = destination.item;
      const currentImg = currentSection.querySelector('.slide-in');

      // 이미지에 slide-in 클래스 추가
      if (currentImg && destination.index === 2) {
        currentImg.classList.add('slide-in');
      }
    }
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
        <SectionThree>
          <HomeBack3 />
          <LandingFooter />
        </SectionThree>
      </SectionsContainer>
    </>
  );
}


export default Home;


const SectionTwo = styled.div`
  background-color: #7BC4C4;
  background-size: cover;
  height: 100vh;
`;

const SectionThree = styled.div`
  background-color: #7BC4C4;
  background-size: cover;
  height: 100vh;
`