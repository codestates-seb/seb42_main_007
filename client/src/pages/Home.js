import "../App.css";
import Header from "../components/Header/Header";
import GlobalStyle from "../styles/GlobalStyle";
import Footer from "../components/Footer/Footer";
import HeaderDropdown from "../components/Header/HeaderDropdown";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        {/* <HeaderDropdown /> */}
        <header className="App-header">
          <p> 개발 준비 완료! </p>
        </header>
        <Footer />
      </div>
    </>
  );
}

export default App;
