import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  TextField,
} from "@mui/material";
import styled from "styled-components";
import Cookies from "js-cookie";

const CardComment = ({ board_id }) => {
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = () => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/spot-reviews`,
        { review: commentText, surfSpotId: 1, rating: 5, },
        {
          headers: {
            Authorization: `Bearer: ${Cookies.get("accessToken")}`, // 저장된 토큰 가져오기
          },
        },
        { withCredentials: true } // 추가
      )
      .then((res) => {
        console.log("리뷰 작성 성공:", res.data);
        window.alert("리뷰 작성 완료");
      })
      .catch((err) => {
        console.error("리뷰 작성 실패:", err);
        window.alert("작성 실패");
      });
  };

  const handleCommentTextChange = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <>
      <CommentsWrapper>
        <div className="commentsHeader">
          <TextField
            className="commentsHeaderTextarea"
            maxRows={3}
            multiline
            placeholder="해변 리뷰를 입력해주세요✏️"
            value={commentText}
            onChange={handleCommentTextChange}
          />
          <Button variant="outlined" onClick={handleCommentSubmit}>
            등록하기
          </Button>
        </div>
      </CommentsWrapper>
    </>
  );
};

export default CardComment;

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
