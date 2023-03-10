import './App.css';
import Header from './components/Header/Header';
import GlobalStyle from './styles/GlobalStyle';
import Footer from './components/Footer/Footer';
import { Link } from 'react-router-dom';
import AskButton from './components/Board/AskButton';


function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header/>
        <header className="App-header">
          <p> 개발 준비 완료! </p>
        </header>
        <Footer />
      </div>
    </>
  );
}

export default App;
