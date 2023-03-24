import "../App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {SectionsContainer, Section} from 'react-fullpage';
import HomeBack from "../components/Board/HomeBack";

function Home() {
  const options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
    navigation: false,
  }
  return (
    <>
    <Header />
    <SectionsContainer {...options}>
        <Section>
          <HomeBack />
        </Section>
        <Section>

        </Section>
      </SectionsContainer>
      <Footer />
    </>
  );
}

export default Home;
