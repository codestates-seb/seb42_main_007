import { Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import "./App.css";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import List from "./pages/List";
import Write from "./pages/Write";
import Login from "./components/Login/Login";
import Signup from "./components/signUp/SignUp";
import Mypage from "./components/Mypage/Mypage";
import Detail from "./pages/Detail";
import Find from "./pages/Find";
import Delete from "./components/Board/Delete";
import ClassListPage from "./pages/ClassPage/ClassListPage";
import ClassDetailPage from "./pages/ClassDetailPage/ClassDetailPage";
import CreateClassPage from "./pages/CreateClassPage/CreateClassPage";
import EditClassPage from "./pages/EditClassPage/EditClassPage";
import FindId from "./components/Login/FindID";
import FindPassword from "./components/Login/FIndPassword";
import WaveFind from "./pages/WaveFind";
import CardModal from "./components/Board/Card/CardModal";
import GlobalStyle from "./styles/GlobalStyle";
import PaymentSuccess from "./components/Payment/PaymentSuccess";
import PaymentFailure from "./components/Payment/PaymentFailure";
import MyPageNew from "./components/Mypage/MyPageNew";
// import { useCookies } from 'react-cookie';

function App() {
  const { accessToken } = useAuth();
  console.log(accessToken);
  return (
    <AuthProvider>
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Find" element={<Find></Find>}></Route>
          <Route path="/CardModal" element={<CardModal></CardModal>}></Route>
          <Route path="/WaveFind" element={<WaveFind></WaveFind>}></Route>
          <Route path="/Write" element={<Write></Write>}></Route>
          <Route path="/edit/:boardPostId" element={<Edit></Edit>}></Route>
          <Route path="/Delete" element={<Delete></Delete>}></Route>
          <Route path="/List" element={<List></List>}></Route>
          <Route path="/Detail" element={<Detail></Detail>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/Mypage" element={<Mypage />}></Route>
          <Route
            path="/detail/:boardPostId"
            element={<Detail></Detail>}
          ></Route>
          <Route path="/Mypage" element={<Mypage />}></Route>
          <Route path="/classlist" element={<ClassListPage />}></Route>
          <Route path="/class/:lessonId" element={<ClassDetailPage />}></Route>
          <Route path="/newclass" element={<CreateClassPage />}></Route>
          <Route path="/findid" element={<FindId />}></Route>
          <Route path="/findpassword" element={<FindPassword />}></Route>
          <Route
            path="/editclass/:lessonId"
            element={<EditClassPage />}
          ></Route>
          <Route path="/paysuccess" element={<PaymentSuccess />}></Route>
          <Route path="/payfailed" element={<PaymentFailure />}></Route>
          <Route path="/mypagetest" element={<MyPageNew />}></Route>
        </Routes>
      </>
    </AuthProvider>
  );
}

export default App;
