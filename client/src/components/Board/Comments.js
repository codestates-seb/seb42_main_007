import React from "react";
import axios from "axios";
import {
  Button,
  TextField,
} from "@mui/material";
import styled from "styled-components";

const Comments = ({ board_id }) => {
  return (
    <>
      <CommentsWrapper>
        <div className="commentsHeader">
          <TextField
            className="commentsHeaderTextarea"
            maxRows={3}
            // onClick={isLogin}
            multiline
            placeholder="댓글을 입력해주세요✏️"
          />
          <Button variant="outlined">등록하기</Button>
        </div>
        <div className="commentsBody">
          <div className="commentsComment">
            <div className="commentContent">
              저 방금까지 죽도해변에서 서핑했는데 서핑하기 좋았어요
            </div>
            <div className="commentUsernameDate">
              <div className="commentDate">2023-3-15</div>
            </div>
            <div className="commentUsername">조한준</div>
            <hr />
          </div>
        </div>
        <div className="commentsBody">
          <div className="commentsComment">
            <div className="commentContent">지금 날씨 진짜 좋아요</div>
            <div className="commentUsernameDate">
              <div className="commentDate">2023-3-16</div>
            </div>
            <div className="commentUsername">조한준</div>
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
export default Comments;

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
