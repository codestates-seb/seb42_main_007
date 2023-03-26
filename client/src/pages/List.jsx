import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

const List = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/board-posts?page=${currentPage}&size=10`
      );
      setPosts(response.data.data);
      setTotalPages(response.data.pageInfo.totalPages);
    }
    fetchData();
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
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
      {posts.length > 0 ? (
        <>
          {posts.map((post, index) => (
            <PostItem key={post.boardPostId}>
              <PostNumber>{post.boardPostId}</PostNumber>
              <div>
                <PostTitle>
                  <Link to={`/Detail/${post.boardPostId}`}>{post.title}</Link>
                </PostTitle>
                <PostDate>{post.createdAt}</PostDate>
                <p>{post.displayName}</p>
                <p>{post.viewCount} views</p>
              </div>
            </PostItem>
          ))}
          <Stack spacing={2} direction="row">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
            />
          </Stack>
        </>
      ) : (
        <NoPost>게시글이 없습니다. 글을 작성해 주세요!</NoPost>
      )}
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
      /* text-decoration: underline; */
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const PostNumber = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #6b6b6b;
  margin-right: 1rem;
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

const NoPost = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 3rem;
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

