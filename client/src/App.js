import './App.css';
import GlobalStyle from './styles/GlobalStyle';
import { Link } from 'react-router-dom';
import AskButton from './components/Board/AskButton';


function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          <p> 개발 준비 완료! </p>
        </header>
      </div>
    </>
  );
}

export default App;
