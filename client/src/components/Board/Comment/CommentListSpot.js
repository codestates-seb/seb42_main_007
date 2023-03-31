import React from 'react';
import CommentSpot from './CommentSpot';
import styled from 'styled-components';

const CommentListSpot = ({ comments, onUpdate, onDelete }) => {
  return (
    <Wrapper>
      {comments.map((comment) => (
        <CommentSpot
          key={comment.surfSpotId}
          comment={comment}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </Wrapper>
  );
};

export default CommentListSpot;

const Wrapper = styled.div`
  padding-bottom: 0rem;
`