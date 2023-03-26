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
        `${process.env.REACT_APP_SERVER_URL}/board-posts?page=${page}&size=10`
      );
      setPosts(response.data.posts);
      setTotalPages(response.data.totalPages);
      setCurrentPage(Number(page));
      console.log(response.data.posts);
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
      <Header />
      <MainContainer>
        <HeadContainer>
          <h1>커뮤니티 게시판</h1>
          <AskButton>
            <Link to="/Write">게시글 작성</Link>
          </AskButton>
        </HeadContainer>
        {posts?.map((post) => (
          <PostItem key={post.boardPostId}>
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
      </MainContainer>
      <Footer />
    </>
  );
};

export default List;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  height: 100%;
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1140px;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.3rem;
    margin: 0;
    padding: 0;
    font-weight: 30px;
    color: #2b2b2b;
  }
`;

const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1140px;
  margin-bottom: 2rem;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const PostTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #2b2b2b;
  margin: 0 0 1rem 0;
  padding: 0;
  line-height: 1.4;
`;

const PostDate = styled.p`
  font-size: 1.2rem;
  color: #6b6b6b;
  margin: 0;
  padding: 0;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1140px;
  margin-top: 4rem;
`;

const Button = styled.button`
  font-size: 1.2rem;
  font-weight: 500;
  color: #6b6b6b;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 1rem;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }

  &:disabled {
    cursor: not-allowed;
    color: #c1c1c1;
  }
`;

const PageNumber = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #2b2b2b;
  margin-right: 1rem;
  padding: 0;
`;

const AskButton = styled.div`
  a {
    background-color: #7cccdc;
    color: white;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.2rem;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #36778b;
    }
  }
`;





