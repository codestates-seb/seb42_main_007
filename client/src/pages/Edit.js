import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import { Input } from "../components/Board/Input";
import {
  InputLabel,
} from "../components/Board/EditorInputWrapper";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { boardPostId } = useParams();
  const navigate = useNavigate();
  const { state: { post } } = useLocation(); // 이전 페이지에서 전달된 post 데이터 가져오기

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        setTitle(post.title); // 이전 페이지에서 전달된 post 데이터 사용
        setContent(post.content); // 이전 페이지에서 전달된 post 데이터 사용
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
        console.log("게시글을 불러오는데 실패했습니다")
      }
    };
    fetchData();
  }, [post]); // post 데이터도 useEffect의 의존성 배열에 추가

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/board-posts/${boardPostId}`,
      {
        title: title,
        content: content,
      }
    );
    navigate(`/detail/${boardPostId}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
    <Header />
    <MainLeft>
    <h2>게시글 수정</h2>
    <div>
      <form onSubmit={handleSubmit}>
      <InputLabel title="제목" />
          <input type="text" value={title} onChange={handleTitleChange} />
        <br />
        <label>
          내용:
          <textarea value={content} onChange={handleContentChange} />
        </label>
        <br />
        <button type="submit">수정 완료</button>
      </form>
    </div>
    </MainLeft>
    <Footer />
    </>
  );
};

export default Edit;


const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 6rem 20rem 4rem;
  padding-top: 2rem;

  .buttonWrapper {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    margin-top: 1.5rem;
    margin-bottom: 4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  > h2 {
    display: flex;
    flex-direction: row;
    font-size: 30px;
  }

  /* Media query for screens smaller than 1080px */
  @media only screen and (max-width: 1080px) {
    margin: 6rem 2rem 4rem;
    padding-top: 1rem;

    > div {
      gap: 0.2rem;
    }

    > h2 {
      font-size: 30px;
    }

    .buttonWrapper {
      gap: 0.4rem;
      margin-bottom: 2rem;
    }
  }
`;
