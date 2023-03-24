import {Pagination} from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "../components/Board/Card";
import { Card2 } from "../components/Board/Card2";
import { Card3 } from "../components/Board/Card3";
import { Card4 } from "../components/Board/Card4";
import "../components/Board/FindList.scss"

const Find = () => {
  return (
    <>
    <Header />
    <Main>
    <div className="FindList-wrapper">
      <div className="FindList-header">
        서핑장소 찾기
      </div>
      <div className="FindList-body">
        <Card />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
      <div className="FindList-footer">
        {/*페이지네이션: count에 페이지 카운트, page에 페이지 번호 넣기*/}
        <Pagination
          showFirstButton showLastButton
        />
      </div>
    </div>
    </Main>
    <Footer />
    </>
  )
}

export default Find;

const Main = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 4rem;

  .box {
    object-fit: cover;
  }

  .h2 {
    font-size: 30px;
  }
`