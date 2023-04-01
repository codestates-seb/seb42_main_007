import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import { format } from "date-fns";
import LoadingIndicator from "../Board/Card/LoadingIndicator";
import Cookies from "js-cookie";

const MyList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await axios.get(
        `http://43.201.167.13:8080/board-posts?page=1&size=10`,
        {
            headers: {
              Authorization: `Bearer ${Cookies.get('accessToken')}`, // 저장된 토큰 가져오기
            },
          }
      );
      setPosts(response.data.data);
      setTotalPages(response.data.pageInfo.totalPages);
      setIsLoading(false);
    }
    fetchData();
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
        <HeadContainer>
          <h1>나의 커뮤니티 게시판</h1>
        </HeadContainer>
        {isLoading ? (<>
          <LoadingIndicator />
          <span>게시글 불러오는중..</span></>
        ) : posts.length > 0 ? (
          <>
            {posts.map((post, index) => (
              <PostItem key={post.boardPostId}>
                <PostNumber>{post.boardPostId}</PostNumber>
                <div>
                  <PostTitle>
                    <Link to={`/Detail/${post.boardPostId}`}>{post.title}</Link>
                  </PostTitle>
                </div>
                <PostBox>
                  <RightBox><div className="name-left">{post.displayName}</div><div className="name-right">조회수 {post.viewCount}</div></RightBox>
                  <PostDate>{format(new Date(post.createdAt), "yyyy년 M월 d일 a h:mm")}</PostDate>
                </PostBox>
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
    </>
  );
};


export default MyList;



const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1140px;
  margin-bottom: 2rem;

  h1 {
    font-size: 1rem;
    margin: 1;
    padding: 1;
    font-weight: 30px;
    color: #2b2b2b;
  }
`;

const PostItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 0.6rem;
  max-width: 890px;
  margin-bottom: 1rem;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    color: #2b2b2b;
    font-size: 1.5rem;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: #7cccdc;
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
  padding: 0;
  line-height: 1.4;
`;
const PostNumber = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #6b6b6b;
  margin-right: 1rem;
`;

const PostBox = styled.div`
  margin-bottom: 0.6rem;
`


const RightBox = styled.p`
  font-size: 0.8rem;
  color: gray;

  .name-left {
    float: left;
    margin-left: 0.2rem;
    margin-bottom: 0.2rem;
  }
  .name-right {
    float: right;
    margin-right: 0.2rem;
    margin-bottom: 0.2rem;
  }
`

const PostDate = styled.p`
  font-size: 0.8rem;
  color: #6b6b6b;
  margin: 0;
  padding: 0;
  clear: both;
`;

const NoPost = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 3rem;
`;

