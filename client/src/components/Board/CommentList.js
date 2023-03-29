import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import styled from "styled-components";

const CommentList = ({ board_id }) => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/board-comments/1?page=1&size=10`)
      .then((res) => {
        setComments((prevComments) => [...prevComments, ...res.data.data]);
        setTotalPages(res.data.pageInfo.totalPages);
        setLoading(false);
      })
      .catch((err) => {
        console.error("댓글 리스트 불러오기 실패:", err);
      });
  }, [currentPage]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }, options);

    if (observer.current && totalPages > currentPage) {
      observer.current.observe(document.querySelector(".commentObserver"));
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [hasMore, totalPages, currentPage]);

  useEffect(() => {
    if (currentPage === totalPages) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
  }, [currentPage, totalPages]);

  return (
    <CommentListWrapper>
      {comments.map((comment, index) => (
        <div key={comment.boardPostId} className="comment">
          <div className="commentContent">{comment.content}</div>
          <div className="commentUsernameDate">
            <div className="commentUsername">{comment.displayName}</div>
            <div className="commentDate">{comment.createdAt}</div>
          </div>
          <hr />
          {index === comments.length - 1 && (
            <div className="commentObserver" />
          )}
        </div>
      ))}
      {loading && <div>댓글창 로딩중...</div>}
    </CommentListWrapper>
  );
};

export default CommentList;

const CommentListWrapper = styled.div`
  .comment {
    margin: 0.5rem 0;
  }

  .commentUsernameDate {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  .commentDate {
    color: rgb(156, 156, 156);
  }

  .commentContent {
    white-space: pre-wrap;
    word-break: break-all;
  }

  hr {
    background-color: #e0e0e0;
    height: 1px;
    border: 0px;
    clear: both;
  }
`;
