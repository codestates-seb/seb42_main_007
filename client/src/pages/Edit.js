import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import { Input } from "../components/Board/Input";
import { InputLabel } from "../components/Board/EditorInputWrapper";
import { Button } from "../components/Board/Button";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useRef } from "react";
import Cookies from "js-cookie";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { boardPostId } = useParams();
  const navigate = useNavigate();
  const {
    state: { post },
  } = useLocation(); // 이전 페이지에서 전달된 post 데이터 가져오기
  const body1 = useRef();

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
        console.log("게시글을 불러오는데 실패했습니다");
      }
    };
    fetchData();
  }, [post]); // post 데이터도 useEffect의 의존성 배열에 추가

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleChange = () => {
    const instance = body1.current.getInstance();
    const data = instance.getMarkdown();
    setContent(data);
    console.log(content);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/board-posts/${boardPostId}`,
      {
        title: title,
        content: content,
      },
      {
        headers: {
        Authorization: `Bearer: ${Cookies.get('accessToken')}`, // 저장된 토큰 가져오기
      }
    },
    );
    navigate(`/detail/${boardPostId}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const cancelButtonClick = () => {
    navigate(`/detail/${boardPostId}`);
  };

  return (
    <>
      <Header />
      <MainLeft>
        <h2>게시글 수정</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <InputLabel title="제목" />
            <Input
              placeholder=" "
              padding="0.78rem 0.91rem"
              width="calc(100% - 30.12px);"
              value={title}
              onChange={handleTitleChange}
            />
            <InputLabel title="내용" />
            {content&&<Editor
              ref={body1}
              initialValue={content}
              previewStyle="tab"
              height="600px"
              initialEditType="markdown"
              useCommandShortcut={true}
              onChange={handleChange}
            />}

            <div className="buttonWrapper">
              <Button
                type="submit"
                buttonType="type2"
                buttonName="수정"
                width="8.04rem"
                height="3.79rem"
              />
              <Button
                onClick={cancelButtonClick}
                buttonType="type4"
                buttonName="취소"
                width="8.04rem"
                height="3.79rem"
              />
            </div>
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
