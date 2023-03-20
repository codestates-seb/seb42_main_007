import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import JukDoBeach from "../images/Board/JukDoBeach.jpg";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Find = () => {
  return (
    <>
      <Header />
      <TopBar>
        <section>
          <div>
            <nav><Link to="/List">양양</Link></nav>
            <nav><Link to="/List">제주</Link></nav>
            <nav><Link to="/List">부산</Link></nav>
            <nav><Link to="/List">고성</Link></nav>
          </div>
        </section>
      </TopBar>
      <JukDo></JukDo>
      <Footer />
    </>
  );
};

export default Find;

const TopBar = styled.div`
  a {
    color: inherit;
    text-decoration: none;
  }

  section {
    text-align: center;
    padding-top: 7.5rem;
  }

  section > div {
    display: inline-block;
    background-color: #f7dfdf;
    padding: 0.6rem 2rem;
    border-radius: 7px;
  }

  section > div > nav {
    display: inline-block;
  }

  section > div > nav > a {
    display: block;
    padding: 1rem 1rem;
    font-size: 20px;
  }

  section > div > nav > a:hover {
    background-color: #fdf3f3;
    color: #d8a9a9;
    cursor: pointer;
  }
`;

const JukDo = styled.img.attrs({
    src: `${JukDoBeach}`,
})`
`