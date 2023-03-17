import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
// import {jwtUtils} from "../utils/jwtUtils";
// import api from "../utils/api";
import { useLocation, useNavigate } from "react-router-dom";
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";
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
          {/* <Button variant="outlined" disabled={true}>
              등록하기
            </Button> */}
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
        {
          /*
            page(현재 페이지)와 pageCount(총 페이지 갯수)가 같으면 서버에서
            모든 댓글을 가져온 상태이므로 댓글 더보기 버튼이 보이지 않게 한다.
            page의 초기 상태가 1이기 때문에 컴포넌트가 마운트 된 후 첫페이지를 가져오고 만약 pageCount가 5이고
            현재 page가 4라면 버튼을 누르는 순간 page가 5가되어 마지막 페이지의 데이터를 가져온다.
          */
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
        }

        {/*modal*/}
        <Dialog>
          <DialogContent style={{ position: "relative" }}>
            <IconButton style={{ position: "absolute", top: "0", right: "0" }}>
              <DisabledByDefaultOutlinedIcon />
            </IconButton>
            <div className="modal">
              <div className="modal-title">로그인이 필요합니다</div>
              <div className="modal-content">
                로그인 페이지로 이동하시겠습니까?
              </div>
              <div className="modal-button">
                <Button
                  variant="outlined"
                  color="error"
                  // onClick={goLogin}
                >
                  예
                </Button>
                <Button variant="outlined" color="primary">
                  아니오
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
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
  }

  hr {
    background-color: lightgray;
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
