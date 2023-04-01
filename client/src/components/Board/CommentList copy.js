import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CommentList = ({ board_id }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      // .get(`${process.env.REACT_APP_SERVER_URL}/board-comments/${board_id}`)
      .get(`${process.env.REACT_APP_SERVER_URL}/board-comments/1?page=1&size=10`)
      .then((res) => {
        setComments(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("댓글 리스트 불러오기 실패:", err);
      });
  }, [board_id]);

  return (
    <CommentListWrapper>
      {comments.map((comment) => (
        <div className="comment" key={comment.boardCommentId}>
          <div className="commentContent">{comment.comment}</div>
          <div className="commentUsernameDate">
            <div className="commentUsername">{comment.displayName}</div>
            <div className="commentDate">{comment.createdAt}</div>
          </div>
          <hr />
        </div>
      ))}
      {loading && <div>댓글창 로딩중...</div>}
    </CommentListWrapper>
  );
};

export default CommentList;

const CommentListWrapper = styled.div`
  .comment {
    margin: 0.5rem 0;
  }

  .commentUsernameDate {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  .commentDate {
    color: rgb(156, 156, 156);
  }

  .commentContent {
    white-space: pre-wrap;
    word-break: break-all;
  }

  hr {
    background-color: #e0e0e0;
    height: 1px;
    border: 0px;
    clear: both;
  }
`;
