import { Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import './App.css';
import Edit from './pages/Edit';
import Home from './pages/Home';
import List from './pages/List';
import Write from './pages/Write';
import Login from './components/Login/Login';
import Signup from './components/signUp/SignUp';
import Mypage from './components/Mypage/Mypage';
import BoardList from './pages/BoardList';
import Detail from './pages/Detail';
import Find from './pages/Find';
import Board from './pages/Board';
import ClassListPage from './pages/ClassPage/ClassListPage';
import ClassDetailPage from './pages/ClassDetailPage/ClassDetailPage';
import ClassPaymentPage from './pages/ClassPaymentPage/ClassPaymentPage';
import CreateClassPage from './pages/CreateClassPage/CreateClassPage';
import EditClassPage from './pages/EditClassPage/EditClassPage';
import FindId from './components/Login/FindID';
import FindPassword from './components/Login/FIndPassword';
import WaveFind from './pages/WaveFind';
import CardModal from './components/Board/Card/CardModal';
import GlobalStyle from './styles/GlobalStyle';
import PaymentSuccess from './components/Payment/PaymentSuccess';
import PaymentFailure from './components/Payment/PaymentFailure';

function App() {
  const { accessToken } = useAuth();
  console.log(accessToken);
  return (
      <AuthProvider>
    <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Find" element={<Find />} />
          <Route path="/CardModal" element={<CardModal />} />
          <Route path="/WaveFind" element={<WaveFind />} />
          <Route path="/Write" element={<Write />} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="/List" element={<List />} />
          <Route path="/Board" element={<Board />} />
          <Route path="/BoardList" element={<BoardList />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/detail/:boardPostId" element={<Detail />} />
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/classlist" element={<ClassListPage />} />
          <Route path="/class/:lessonId" element={<ClassDetailPage />} />
          <Route path="/pay/:lessonId" element={<ClassPaymentPage />} />
          <Route path="/newclass" element={<CreateClassPage />} />
          <Route path="/findid" element={<FindId />} />
          <Route path="/findpassword" element={<FindPassword />} />
          <Route path="/editclass/:lessonId" element={<EditClassPage />} />
          <Route path="/paysuccess" element={<PaymentSuccess />} />
          <Route path="/payfailed" element={<PaymentFailure />} />
        </Routes>
      </>
        </AuthProvider>
  );
}


export default App;