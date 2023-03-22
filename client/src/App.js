import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import { List } from "./pages/List";
import Ask from "./pages/Ask";
import Login from "./components/Login/Login";
import Signup from "./components/signUp/SignUp"
import Mypage from "./components/Mypage/Mypage"
import Detail from "./pages/Detail";
import ClassListPage from "./pages/ClassPage/ClassListPage";
import ClassDetailPage from "./pages/ClassDetailPage/ClassDetailPage";
import ClassPaymentPage from "./pages/ClassPaymentPage/ClassPaymentPage";
import CreateClassPage from "./pages/CreateClassPage/CreateClassPage";
import EditClassPage from './pages/EditClassPage/EditClassPage';


// import { useEffect } from 'react';
// import { authActions } from './Redux/auth';
// import { Cookies } from 'react-cookie';
// import { useDispatch } from 'react-redux';

function App() {
  // const dispatch = useDispatch();

  // const cookies = new Cookies();
  // useEffect(() => {
  //   const Refresh = cookies.get('Refresh');
  //   if (Refresh) {
  //     dispatch(authActions.login());
  //   } else {
  //     dispatch(authActions.logout());
  //   }
  // }, []);
  return (
    <>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/ask" element={<Ask></Ask>}></Route>
          <Route path="/Edit" element={<Edit></Edit>}></Route>
          <Route path="/List" element={<List></List>}></Route>
          <Route path="/Detail" element={<Detail></Detail>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/Mypage" element={<Mypage />}></Route>
          <Route path="/classlist" element={<ClassListPage />}></Route>
          <Route path="/classdetail" element={<ClassDetailPage />}></Route>
          <Route path="/pay" element={<ClassPaymentPage />}></Route>
          <Route path="/newclass" element={<CreateClassPage />}></Route>
          <Route path="/editclass" element={<EditClassPage />}></Route>
        </Routes>
    </>
  );
}

export default App;

