import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentList from "./CommentList";
import Cookies from "js-cookie";
import { Button, TextField } from "@mui/material";
import styled from "styled-components";

const CommentApp = ({ boardPostId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  axios.interceptors.request.use(
    (config) => {
      const accessToken = Cookies.get("accessToken");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/board-comments/${boardPostId}?page=1&size=10`
      );
      setComments(response.data.data);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [newComment]);

  const addComment = async (commentData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/board-comments`,
        commentData
      );
      setComments([...comments, response.data]);
      setNewComment("");
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  const updateComment = async (id, updatedText) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_SERVER_URL}/board-comments/${id}`,
        {
          comment: updatedText,
        }
      );
      const updatedComments = comments.map((comment) =>
        comment.boardCommentId === id
          ? { ...comment, comment: updatedText }
          : comment
      );
      setComments(updatedComments);
    } catch (error) {
      console.error("Failed to update comment:", error);
    }
  };

  const deleteComment = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/board-comments/${id}`
      );
      const updatedComments = comments.filter(
        (comment) => comment.boardCommentId !== id
      );
      setComments(updatedComments);
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentData = {
      comment: newComment,
      boardPostId: `${boardPostId}`,
      // displayName: "한준", // Replace with the actual user's display name
    };
    addComment(commentData);
  };

  return (
    <>
      <CommentsWrapper>
        <form onSubmit={handleSubmit}>
        <div className="commentsHeader">
          <TextField
            type="text"
            className="commentsHeaderTextarea"
            maxRows={3}
            multiline
            placeholder="댓글을 입력해주세요✏️"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button variant="outlined" type="submit">
            등록하기
          </Button>
        </div>
        </form>
        </CommentsWrapper>
        <CommentList
          comments={comments}
          onUpdate={updateComment}
          onDelete={deleteComment}
        />
    </>
  );
};

export default CommentApp;

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
`;
