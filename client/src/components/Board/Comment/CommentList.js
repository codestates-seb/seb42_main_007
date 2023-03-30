import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments, onUpdate, onDelete }) => {
  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.boardCommentId}
          comment={comment}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default CommentList;
