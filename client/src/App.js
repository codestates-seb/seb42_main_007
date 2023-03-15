import './App.css';
import Header from './components/Header/Header';
import GlobalStyle from './styles/GlobalStyle';
import Footer from './components/Footer/Footer';
import ClassPaymentPage from './pages/ClassPaymentPage/ClassPaymentPage';
import ClassDetailPage from './pages/ClassDetailPage/ClassDetailPage';
import ClassListPage from './pages/ClassPage/ClassListPage';
import CreateClassPage from './pages/CreateClassPage/CreateClassPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        {/* <Header/>
        <header className="App-header">
          <p> 개발 준비 완료! </p>
        </header>
        <Footer /> */}
        <CreateClassPage />
      </div>
    </>
  );
}

export default App;
