import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import moment from 'moment';
import {Button, Dialog, DialogContent, IconButton, TextField} from "@mui/material";
import {useSelector} from "react-redux";
// import {jwtUtils} from "../utils/jwtUtils";
// import api from "../utils/api";
import {useLocation, useNavigate} from "react-router-dom";
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";
import "./comments.scss";

const Comments = ({board_id}) => {

    return (
        <div className="comments-wrapper">
        <div className="comments-header">
          <TextField
            className="comments-header-textarea"
            maxRows={3}
            // onClick={isLogin}
            multiline placeholder="댓글을 입력해주세요✏️"
          />
            <Button variant="outlined">등록하기</Button>
            {/* <Button variant="outlined" disabled={true}>
              등록하기
            </Button> */}
        </div>
        <div className="comments-body">
            <div className="comments-comment">
              <div className="comment-username-date">
                <div className="comment-date">2023-3-15</div>
              </div>
              <div className="comment-content">저 방금까지 죽도해변에서 서핑했는데 서핑하기 좋았어요</div>
              <div className="comment-username">조한준</div>
              <hr/>
            </div>
          
        </div>
        {
          /*
            page(현재 페이지)와 pageCount(총 페이지 갯수)가 같으면 서버에서
            모든 댓글을 가져온 상태이므로 댓글 더보기 버튼이 보이지 않게 한다.
            page의 초기 상태가 1이기 때문에 컴포넌트가 마운트 된 후 첫페이지를 가져오고 만약 pageCount가 5이고
            현재 page가 4라면 버튼을 누르는 순간 page가 5가되어 마지막 페이지의 데이터를 가져온다.
          */
            <div className="comments-footer"
            >
              댓글 더보기
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          
        }
  
        {/*modal*/}
        <Dialog>
          <DialogContent style={{position: "relative"}}>
            <IconButton
              style={{position: "absolute", top: "0", right: "0"}}
            >
              <DisabledByDefaultOutlinedIcon/>
            </IconButton>
            <div className="modal">
              <div className="modal-title">로그인이 필요합니다</div>
              <div className="modal-content">로그인 페이지로 이동하시겠습니까?</div>
              <div className="modal-button">
                <Button
                  variant="outlined" color="error"
                  // onClick={goLogin}
                >
                  예
                </Button>
                <Button
                  variant="outlined" color="primary"
                >
                  아니오
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
  export default Comments;