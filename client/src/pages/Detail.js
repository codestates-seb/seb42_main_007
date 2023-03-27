import { useEffect, useState } from 'react';
import axios from 'axios';

function Detail(props) {
  const [boardPost, setBoardPost] = useState(null);
  const boardPostId = props.match.params.id; // url 파라미터로부터 boardPostId를 추출합니다.

  useEffect(() => {
    axios.get(`http://43.201.167.13:8080/board-posts/${boardPostId}`)
      .then(response => {
        setBoardPost(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [boardPostId]);

  if (!boardPost) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{boardPost.title}</h1>
      <p>{boardPost.content}</p>
      <p>작성자: {boardPost.displayName}</p>
      <p>작성일: {boardPost.createdAt}</p>
      <p>조회수: {boardPost.viewCount}</p>
    </div>
  );
}

export default Detail;
