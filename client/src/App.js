import { Routes, Route } from "react-router-dom";

import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import { List } from "./pages/List";
import Ask from "./pages/Ask";
import Login from "./components/Login/Login";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/ask" element={<Ask></Ask>}></Route>
          <Route path="/Edit" element={<Edit></Edit>}></Route>
          <Route path="/List" element={<List></List>}></Route>
          <Route path="/Detail" element={<Detail></Detail>}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

