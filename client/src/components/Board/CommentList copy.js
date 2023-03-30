import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Cookies from "js-cookie";

const CommentList = ({ boardPostId, comments, loadMoreComments, currentPage }) => {
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    loadMoreComments(currentPage + 1)
      .then(() => setLoading(false))
      .catch((err) => {
        console.error("댓글 리스트 불러오기 실패:", err);
        setLoading(false);
      });
  };

  const handleDeleteComment = (boardCommentId) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/board-comments/${boardCommentId}`, {
        headers: {
          Authorization: `Bearer: ${Cookies.get("accessToken")}`,
        },
      })
      .then(() => {
        setLoading(false);
        // setComments(comments.filter((comment) => comment.boardCommentId !== boardCommentId));
      })
      .catch((err) => {
        console.error("댓글 삭제 실패:", err);
        setLoading(false);
      });
  };

  return (
    <>
      {comments.length === 0 && (
        <div className="no-reply">작성된 댓글이 없습니다. 댓글을 작성해주세요!</div>
      )}
      <CommentsWrapper>
        {comments.map((comment, key) => (
          <div className="commentsBody" key={comment.boardCommentId}>
            <div className="commentsComment">
              <div className="commentContent">{comment.comment}</div>
              <div className="commentUsernameDate">
                <div className="commentDate">
                  {new Date(comment.createdAt).toLocaleString()}
                </div>
                <div className="commentUsername">{comment.displayName}</div>
                <button
                  onClick={() => handleDeleteComment(comment.boardCommentId)}
                >
                  삭제
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))}
        {loading && <div>댓글창 로딩중...</div>}
        <div className="commentsFooter" onClick={handleLoadMore}>
          댓글 더보기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </CommentsWrapper>
    </>
  );
};

export default CommentList;

const CommentsWrapper = styled.div`
  .commentsHeader {
    margin: 1rem 0;
    display: flex;
  }

  .commentsHeaderTextarea {
    flex: 1;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  button {
    margin-left: 0.5rem;
    font-size: 1.1rem;
  }

  .commentsBody {
    clear: both;
  }

  .commentsComment {
    margin: 0.5rem 0;
  }

  .commentUsernameDate {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  .commentDate {
    color: rgb(156, 156, 156);
    display: flex;
    margin-left: auto;
    float: right;
  }
  .commentContent {
    display: flex;
    white-space: pre-wrap;
    word-break: break-all;
    margin: 0.4rem auto;
    float: left;
  }

  .commentUsername {
    display: flex;
    flex-direction: row-reverse;
    align-items: baseline;
    font-weight: 600;
    float: right;
    color: #595959;
    margin-left: 1rem;
  }

  hr {
    background-color: #e0e0e0;
    height: 1px;
    border: 0px;
    clear: both;
  }

  .commentsFooter {
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
  }
`;
