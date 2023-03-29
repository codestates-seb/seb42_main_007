import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const CardCommentList = ({ surfSpotId }) => {
//   const [comments, setComments] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`${process.env.REACT_APP_SERVER_URL}/board-comments/${surfSpotId}`)
//       .get(`${process.env.REACT_APP_SERVER_URL}/spot-reviews?page=1&size=10&surfSpotId=1`)
//       .then((res) => {
//         setComments(res.data.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("댓글 리스트 불러오기 실패:", err);
//       });
//   }, [surfSpotId]);

  return (
    <CommentListWrapper>
      {/* {comments.map((comment) => (
        <div className="comment" key={comment.boardCommentId}>
          <div className="commentContent">{comment.comment}</div>
          <div className="commentUsernameDate">
            <div className="commentUsername">{comment.displayName}</div>
            <div className="commentDate">{comment.createdAt}</div>
            <div className="commentsBody"> */}
          <div className="commentsComment">
            <div className="commentContent">
              저 방금까지 죽도해변에서 서핑했는데 서핑하기 좋았어요
            </div>
            <div className="commentUsernameDate">
              <div className="commentDate">2023-3-15</div>
            </div>
            <div className="commentUsername">한준</div>
            <hr />
          </div><div className="commentsComment">
            <div className="commentContent">
              여기 바다가 정말 이쁘네요
            </div>
            <div className="commentUsernameDate">
              <div className="commentDate">2023-3-15</div>
            </div>
            <div className="commentUsername">언용</div>
            <hr />
          </div><div className="commentsComment">
            <div className="commentContent">
              오늘 서핑 강습 들었는데 정말 좋았어요
            </div>
            <div className="commentUsernameDate">
              <div className="commentDate">2023-3-16</div>
            </div>
            <div className="commentUsername">산애</div>
            <hr />
          </div><div className="commentsComment">
            <div className="commentContent">
              서핑 강습 들었는데 정말 친절하고 좋았어요
            </div>
            <div className="commentUsernameDate">
              <div className="commentDate">2023-3-17</div>
            </div>
            <div className="commentUsername">다솜</div>
            <hr />
          </div><div className="commentsComment">
            <div className="commentContent">
              여기 맛집도 많네요
            </div>
            <div className="commentUsernameDate">
              <div className="commentDate">2023-3-17</div>
            </div>
            <div className="commentUsername">민우</div>
            <hr />
          </div><div className="commentsComment">
            <div className="commentContent">
              바다가 정말 이뻐요
            </div>
            <div className="commentUsernameDate">
              <div className="commentDate">2023-3-18</div>
            </div>
            <div className="commentUsername">민주</div>
            <hr />
          </div><div className="commentsComment">
            <div className="commentContent">
              맛집이 많아서 즐겁습니다
            </div>
            <div className="commentUsernameDate">
              <div className="commentDate">2023-3-18</div>
            </div>
            <div className="commentUsername">한준</div>
            <hr />
          </div><div className="commentsComment">
            <div className="commentContent">
              서핑하기 정말 좋은 해변인거 같아요
            </div>
            <div className="commentUsernameDate">
              <div className="commentDate">2023-3-19</div>
            </div>
            <div className="commentUsername">언용</div>
            <hr />
            </div><div className="commentsComment">
            <div className="commentContent">
              서핑하시는 분들도 많고 즐거운 시간 보냈습니다
            </div>
            <div className="commentUsernameDate">
              <div className="commentDate">2023-3-20</div>
            </div>
            <div className="commentUsername">다솜</div>
            <hr /></div><div className="commentsComment">
            <div className="commentContent">
              가본 바다중에 여기가 최고같아요
            </div>
            <div className="commentUsernameDate">
              <div className="commentDate">2023-3-21</div>
            </div>
            <div className="commentUsername">한준</div>
            <hr />
          </div>
        {/* </div> */}
          {/* </div> */}
          {/* <hr /> */}
        {/* </div> */}
      {/* ))} */}
      {/* {loading && <div>해변리뷰 로딩중...</div>} */}
      <Page><Stack spacing={2} direction="row">
              <Pagination
                // count={totalPages}
                // page={currentPage}
                // onChange={handlePageChange}
              />
            </Stack></Page>
    </CommentListWrapper>
  );
};

export default CardCommentList;

const CommentListWrapper = styled.div`
  .commentsHeader {
    margin: 15rem 0;
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

const Page = styled.span`
    position: absolute;
    right: 25rem;
`
