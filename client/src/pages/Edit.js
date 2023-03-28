import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

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
    navigate(`/detail/${response.data.data.boardPostId}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          제목:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          내용:
          <textarea value={content} onChange={handleContentChange} />
        </label>
        <br />
        <button type="submit">수정 완료</button>
      </form>
    </div>
  );
};

export default Edit;
