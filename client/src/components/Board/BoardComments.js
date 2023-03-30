import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comments from './Comments2';
import CommentList from './CommentList';

const BoardComments = ({ boardPostId, displayName }) => {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = (page = 1) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/board-comments/${boardPostId}?page=${page}&size=10`)
      .then((res) => {
        if (page === 1) {
          setComments(res.data.data);
        } else {
          setComments((prevComments) => [...prevComments, ...res.data.data]);
        }
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => {
        console.error("댓글 리스트 불러오기 실패:", err);
      });
  };

  const updateComments = (newComment) => {
    return new Promise((resolve) => {
      setComments((prevComments) => [newComment, ...prevComments]);
      resolve()
      .then(() => console.log(comments));
    });
  };
  
  const loadMoreComments = () => {
    return new Promise((resolve) => {
      if (page < totalPages) {
        setPage((prePage) => prePage + 1);
        resolve();
      }
    });
  };
  

  return (
    <>
      <Comments
        boardPostId={boardPostId}
        comments={comments}
        updateComments={updateComments}
        displayName={displayName}
      />
      <CommentList
        boardPostId={boardPostId}
        comments={comments}
        loadMoreComments={loadMoreComments}
        page={page} // Pass the page state as a prop
        setComments={setComments}
        displayName={displayName}
      />
    </>
  );
};

export default BoardComments;
