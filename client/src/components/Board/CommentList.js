import React, { useEffect, useState } from "react";
// import axios from "axios";
import styled from "styled-components";

const CommentList = ({ board_id }) => {
  // const [comments, setComments] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(`${process.env.REACT_APP_SERVER_URL}/board-comments/${board_id}`)
  //     .get(`${process.env.REACT_APP_SERVER_URL}/board-comments/1?page=1&size=10`)
  //     .then((res) => {
  //       setComments(res.data.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("댓글 리스트 불러오기 실패:", err);
  //     });
  // }, [board_id]);

  return (
    <>
    <CommentsWrapper>
      {/* {comments.map((comment) => (
        <div className="comment" key={comment.boardCommentId}>
          <div className="commentContent">{comment.comment}</div>
          <div className="commentUsernameDate">
            <div className="commentUsername">{comment.displayName}</div>
            <div className="commentDate">{comment.createdAt}</div>
          </div>
          <hr />
        </div>
      ))} */}
      {/* {loading && <div>댓글창 로딩중...</div>} */}
        <div className="commentsBody">
          <div className="commentsComment">
            <div className="commentContent">
              어서 오세요 날씨 정말 좋아요
            </div>
            <div className="commentUsernameDate">
              <div className="commentDate">2023-3-23</div>
            </div>
            <div className="commentUsername">산애</div>
            <hr />
          </div>
        </div>
        <div className="commentsBody">
          <div className="commentsComment">
            <div className="commentContent">일기예보만큼 날씨가 좋네요</div>
            <div className="commentUsernameDate">
              <div className="commentDate">2023-3-23</div>
            </div>
            <div className="commentUsername">언용</div>
            <hr />
          </div>
        </div>
        <div className="commentsBody">
          <div className="commentsComment">
            <div className="commentContent">여기 지금 죽도해변 근처 카페인데 날씨 진짜 좋아요</div>
            <div className="commentUsernameDate">
              <div className="commentDate">2023-3-23</div>
            </div>
            <div className="commentUsername">다솜</div>
            <hr />
          </div>
        </div>
        <div className="commentsBody">
          <div className="commentsComment">
            <div className="commentContent">어서오세요 지금도 차 막히나요?</div>
            <div className="commentUsernameDate">
              <div className="commentDate">2023-3-23</div>
            </div>
            <div className="commentUsername">민우</div>
            <hr />
          </div>
        </div>
        <div className="commentsBody">
          <div className="commentsComment">
            <div className="commentContent">날씨 좋아서 그런지 오늘 정말 많이 오셨네요!</div>
            <div className="commentUsernameDate">
              <div className="commentDate">2023-3-23</div>
            </div>
            <div className="commentUsername">민주</div>
            <hr />
          </div>
        </div>
         <div className="commentsFooter">
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
  }

  hr {
    background-color: #E0E0E0;
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
