import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

const List = ({ location }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const page = new URLSearchParams(location?.search).get("page") || 1;
      const response = await axios.get(
        `http://localhost:4000/board-posts?page=${page}`
      );
      setPosts(response.data.posts);
      setTotalPages(response.data.totalPages);
      setCurrentPage(Number(page));
    }
    fetchData();
  }, [location?.search]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      const queryParams = new URLSearchParams({ page: prevPage }).toString();
      window.history.pushState(null, "", `?${queryParams}`);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      const queryParams = new URLSearchParams({ page: nextPage }).toString();
      window.history.pushState(null, "", `?${queryParams}`);
    }
  };

  return (
    <>
      <Header></Header>
      <MainLeft>
        <h1>커뮤니티 게시판</h1>
        <AskButton>
          <Link to="/Write">게시글 작성</Link>
        </AskButton>
        {posts?.map((post) => (
          <PostItem key={post.id}>
            <Link to={`/Detail/${post.id}`}>
              <PostTitle>{post.title}</PostTitle>
            </Link>
            <PostDate>{post.createAt}</PostDate>
          </PostItem>
        ))}
        <Pagination>
          <Button onClick={handlePrevPage} disabled={currentPage <= 1}>
            이전
          </Button>
          <PageNumber>{currentPage}</PageNumber>
          <Button onClick={handleNextPage} disabled={currentPage >= totalPages}>
            다음
          </Button>
        </Pagination>
      </MainLeft>
      <Footer></Footer>
    </>
  );
};

export default List;

const MainLeft = styled.div`
  padding: 4rem 5rem 8rem 5rem;
`;

const PostItem = styled.div`
  /* your styles here */
  display: flex;
`;

const PostTitle = styled.h2`
  /* your styles here */
  font-size: 30px;
`;

const PostDate = styled.p`
  /* your styles here */
  font-size: 10px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;

const Button = styled.button`
  /* your styles here */
  display: flex;
`;

const PageNumber = styled.span`
  /* your styles here */
  font-size: 1rem;
`;

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
  float: right;

  a {
    background-color: #7cccdc;
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
    background-color: #36778b;
  }
`;
