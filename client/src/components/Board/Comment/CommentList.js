import React from 'react';
import Comment from './Comment';
import styled from 'styled-components';

const CommentList = ({ comments, onUpdate, onDelete, onLoadMore, pageInfo }) => {
  return (
    <Wrapper>
      {comments.map((comment) => (
        <Comment
          key={comment.boardCommentId}
          comment={comment}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
      {pageInfo.totalPages > pageInfo.page && (
        <div className="commentsFooter" onClick={onLoadMore}>
          댓글 더 보기
        </div>
      )}
    </Wrapper>
  );
};


export default CommentList;

const Wrapper = styled.div`
  padding-bottom: 14rem;
  .commentsFooter {
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: #999999;
}
`

