import React from 'react';
import Comment from './Comment';
import styled from 'styled-components';

const CommentList = ({ comments, onUpdate, onDelete }) => {
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
    </Wrapper>
  );
};

export default CommentList;

const Wrapper = styled.div`
  padding-bottom: 14rem;
`