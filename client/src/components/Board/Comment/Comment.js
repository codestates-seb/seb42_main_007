import React from 'react';

const Comment = ({ comment, onUpdate, onDelete }) => {
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
          <p>{comment.comment}</p>
          <p>{comment.displayName}</p>
          <p>{comment.createdAt}</p>
          <button onClick={() => setEditing(true)}>수정</button>
          <button onClick={() => onDelete(comment.boardCommentId)}>삭제</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={updatedComment}
            onChange={(e) => setUpdatedComment(e.target.value)}
          />
          <button onClick={handleUpdate}>저장</button>
          <button onClick={() => setEditing(false)}>취소</button>
        </>
      )}
    </div>
  );
};

export default Comment;
