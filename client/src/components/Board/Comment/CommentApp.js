import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentList from "./CommentList";
import Cookies from "js-cookie";

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
      boardPostId: `${boardPostId}`, // Replace with the actual post ID
      // displayName: "한준", // Replace with the actual user's display name
    };
    addComment(commentData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글을 입력하세요"
        />
        <button type="submit">댓글 작성</button>
      </form>
      <CommentList
        comments={comments}
        onUpdate={updateComment}
        onDelete={deleteComment}
      />
    </>
  );
};

export default CommentApp;
