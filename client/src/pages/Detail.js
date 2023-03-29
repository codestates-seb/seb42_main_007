import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import Comments2 from "../components/Board/Comments2";
// import VoteBar from "../components/Board/VoteBar";
import DeleteButton from "../components/Board/Delete";
import { format } from "date-fns";
import Avvvatars from 'avvvatars-react'
import LoadingIndicator from "../components/Board/Card/LoadingIndicator";

const BREAK_POINT_MOBILE = 767;
const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;


const Detail = () => {
  const { boardPostId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.querySelector("body").classList.add("modal-open");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.querySelector("body").classList.remove("modal-open");
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true); // 데이터 가져오기 전 로딩 상태 true로 변경
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/board-posts/${boardPostId}`
        );
        setPost(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // 데이터 가져온 후 로딩 상태 false로 변경
      }
    }
    fetchData();
  }, [boardPostId]);

//   const currentUser = {post && currentUser && post.user.id === currentUser.id && (
//   <EditContainer>
//     <button>
//       <Link to="/Edit">수정</Link>
//     </button>
//     <button onClick={Delete}>삭제</button>
//   </EditContainer>
// )}

  return (
    <>
      <Header />
      <MainContainer>
      {loading ? (
          <LoadingIndicator /> // 로딩 중일 때 LoadingIndicator 컴포넌트 출력
        ) : post ? (
          <>
          <QuestionHeader>
            <h1>{post.title}</h1>
          </QuestionHeader>
          <QuestionStat>
            <div className="asked-at">
              <span>작성일 </span>
              {format(new Date(post.createdAt), "yyyy년 M월 d일 a h:mm")}
            </div>
            <div className="view-stats">
              <span>조회수 </span>
              <span>{post.viewCount} 회</span>
            </div>
          </QuestionStat>
          <QuestionStats>
            <EditContainer>
              <button>
                {/* <Link to="/Edit">수정</Link> */}
               <Link to={`/edit/${boardPostId}`} state={{ post }}>수정</Link>
              </button>
              <button onClick={openModal}>삭제</button>
            </EditContainer>
          </QuestionStats>
          <div className="detail-main">
            <QuestionBody>
              <QuestionContent>
                <DetailContainer>
                  <div>
                  {post.content}
                  </div>
                </DetailContainer>
                <InfoContainer>
                  <AuthorContainer>
                    <AuthorAvatar>
                    <Avvvatars value={post.displayName} />
                    </AuthorAvatar>
                    <AuthorDetail>
                    <span>{post.displayName}</span>
                    </AuthorDetail>
                  </AuthorContainer>
                </InfoContainer>
              </QuestionContent>
            </QuestionBody>
            {/* <VoteBar total={post.likeCount || 0}></VoteBar> */}
            <Comments2></Comments2>
          </div>
          <DeleteButton isOpen={isModalOpen} closeModal={closeModal} />
          </>
        ) : (
          <NoPost>게시글이 없습니다.</NoPost>
        )}
      </MainContainer>
      
      <Footer />
    </>
  );
};

export default Detail;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  height: 100%;
  margin: 0 30rem;
  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    margin: 0 5rem;
    }
    @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
      margin: 0 10rem;
    }
    @media only screen and (min-width: ${BREAK_POINT_PC}px) {
      margin: 0 30rem;
    }
`;

const NoPost = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 3rem;
`;

const QuestionHeader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 8px;
    overflow-wrap: break-word;
    font-weight: normal;
    color: hsl(210, 8%, 25%);
  }
`;

const QuestionStat = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  color: gray;
  padding-right: 1rem;
  .asked-at,
  .modified-at {
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
    margin-right: 1rem;
  }
  .view-stats{
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
  }
`;

const QuestionStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 4px;
  padding-bottom: 6px;
  border-bottom: 1px solid hsl(210, 8%, 90%);

  .asked-at,
  .modified-at {
    margin-bottom: 8px;
    margin-right: 16px;
  }

  span {
    color: hsl(210, 8%, 45%);
    margin-right: 2px;
  }
`;

const QuestionBody = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
`;

const QuestionContent = styled.div`
  width: auto;
  padding-right: 1rem;
  grid-column: 2;
  vertical-align: top;
`;

const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 0;
  min-height: 8rem;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 4px;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const EditContainer = styled.div`
  margin: 4px;
  margin-left: 0;
  padding-top: 2px;
  width: 96px;
  flex: 1 auto;
  display: flex;
  flex-wrap: wrap;
  color: hsl(210, 8%, 45%);
  justify-content: flex-end;

  > button {
    margin: 4px;
    color: hsl(210, 8%, 45%);
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

const AuthorContainer = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 10px;
  background-color: #F5F1CB;
  width: 8rem;
  padding: 5px 6px 7px 7px;
  color: hsl(210, 8%, 45%);
`;


const AuthorAvatar = styled.div`
  float: left;
  width: 32px;
  height: 32px;

  > svg {
    width: 32px;
    height: 32px;
  }
`;

const AuthorDetail = styled.div`
  margin-left: 8px;
  width: calc(100% - 40px);
  float: left;
  padding: 0.4rem 0;
  

  a {
    color: hsl(206, 100%, 40%);
    text-decoration: none;
    cursor: pointer;
    word-wrap: break-word;
  }
`;