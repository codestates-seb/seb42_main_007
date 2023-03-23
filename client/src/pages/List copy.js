import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// import Container from '../components/Container';
// import Sidebar from '../components/Sidebar';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import QuestionsList from '../components/Board/QuestionsList';
import QuestionsListDummy from '../components/Board/QuestionsListDummy'


export const List = () => {
  // const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: '',
  //   }).then(res => setQuestions(res.data.data));
  // }, []);

  return (
    <>
    <Header></Header>
      <MainContainer>
        <MainContainer>
          <HeadContainer>
            <h1>커뮤니티 게시판</h1>
            <AskButton>
              <Link to="/Write">게시글 작성</Link>
            </AskButton>
          </HeadContainer>
          <QuestionsController>
            {/* <div className="total-questions">{questions.length} questions</div> */}
            {/* <FilterController>
              <div className="newest-btn">최신글</div>
              <div className="unanswered-btn">인기글</div>
              <div className="view-btn">조회수</div>
              <div className="vote-btn">평점</div>
            </FilterController> */}
          </QuestionsController>
          {/* <QuestionsList questions={questions}></QuestionsList> */}
          <QuestionsListDummy></QuestionsListDummy>
        </MainContainer>
      </MainContainer>
      <Footer></Footer>
    </>
  );
};

export const MainContainer = styled.main`
  padding: 4rem 5rem 8rem 5rem;
`;

export const HeadContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
  flex-wrap: wrap;
  align-items: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 12px;
    flex: 1 auto;
  }
`;

const QuestionsController = styled.div`
  display: flex;
  margin-bottom: 12px;
  justify-content: space-between;
  align-items: center;

  .total-questions {
    font-size: 1.3rem;
    margin-right: 12px;
    flex: 1 auto;
  }
`;

const FilterController = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-bottom: 1px;

  div {
    margin-right: -1px;
    margin-bottom: 1px;
    border: 1px solid hsl(210, 8%, 55%);
    color: hsl(210, 8%, 25%);
    font-size: 12px;
    padding: 0.8em;
    cursor: pointer;
    font-weight: normal;
  }

  div:hover {
    background-color: hsl(210, 8%, 97.5%);
    color: hsl(210, 8%, 35%);
  }

  .newest-btn {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  .vote-btn {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    margin-right: 0;
  }
`;

const AskButton = styled.div`
  margin-bottom: 12px;

  a {
    background-color: #7CCCDC;
    color: hsl(0, 0%, 100%);
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
    font-size: 13px;
    padding: 0.8em;
    cursor: pointer;
    text-decoration: none;
  }

  a:hover {
    background-color: #36778B;
  }
`;