import React from 'react';
import { addHours, format } from "date-fns";
import ko from "date-fns/locale/ko";

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
          <p>{format(
                  addHours(new Date(comment.createdAt), 9),
                  "yyyy년 M월 d일 a h:mm",
                  { locale: ko }
                )}</p>
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
