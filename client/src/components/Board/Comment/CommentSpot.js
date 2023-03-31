import React from "react";
import styled from "styled-components";

const CommentSpot = ({ comment, onUpdate, onDelete }) => {
  const [editing, setEditing] = React.useState(false);
  const [updatedComment, setUpdatedComment] = React.useState(comment.comment);

  const handleUpdate = () => {
    onUpdate(comment.boardCommentId, updatedComment);
    setEditing(false);
  };

  return (
    <div>
      {!editing ? (
        <>
          <CommentsWrapper>
            <div className="commentsBody">
              <div className="commentsComment">
                <div className="commentContent">{comment.review}</div>
                <div className="commentUsernameDate">
                  <div className="commentDate">
                    {new Date(comment.createdAt).toLocaleString(
                      "ko-KR",
                      "Asia/Seoul"
                    )}
                  </div>
                  <button onClick={() => setEditing(true)}>수정</button>
                  <button onClick={() => onDelete(comment.spotReviewId)}>
                    삭제
                  </button>
                  <div className="commentUsername">{comment.displayName}</div>
                </div>
              </div>
              <hr />
            </div>
          </CommentsWrapper>
        </>
      ) : (
        <>
          <InputWrapper>
            <InputField
              type="text"
              placeholder="수정 내용 입력"
              value={updatedComment}
              onChange={(e) => setUpdatedComment(e.target.value)}
            />
            <ButtonWrapper>
              <SaveButton onClick={handleUpdate}>저장</SaveButton>
              <CancelButton onClick={() => setEditing(false)}>
                취소
              </CancelButton>
            </ButtonWrapper>
          </InputWrapper>
        </>
      )}
    </div>
  );
};

export default CommentSpot;

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
  button {
    background-color: #ffffff;
    border: 0px solid #cccccc;
    color: #555555;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 500;
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out,
      color 0.2s ease-in-out;
  }

  button:hover {
    background-color: #f7f7f7;
    border-color: #999999;
    color: #333333;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

const InputField = styled.input`
  width: 100%;
  max-width: 400px;
  border: none;
  background-color: #fff;
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease-in-out;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SaveButton = styled.button`
  background-color: #8fe2e3;
  color: #333;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #2e5196;
    color: #ffffff;
  }
`;

const CancelButton = styled.button`
  background-color: darkgray;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #555;
  }
`;
