import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentListSpot from "./CommentListSpot";
import Cookies from "js-cookie";
import { Button, TextField } from "@mui/material";
import styled from "styled-components";

const CommentAppSpot = ({ surfSpotId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [pageInfo, setPageInfo] = useState({});


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
        `${process.env.REACT_APP_SERVER_URL}/spot-reviews?page=1&size=10&surfSpotId=1`
      );
      setComments(response.data.data);
      setPageInfo(response.data.pageInfo);
      console.log(comments)
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
        `${process.env.REACT_APP_SERVER_URL}/spot-reviews`,
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
        `${process.env.REACT_APP_SERVER_URL}/spot-reviews/${id}`,
        {
          review: updatedText,
        }
      );
      const updatedComments = comments.map((comment) =>
        comment.spotReviewId === id
          ? { ...comment, review: updatedText }
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
        `${process.env.REACT_APP_SERVER_URL}/spot-reviews/${id}`
      );
      const updatedComments = comments.filter(
        (comment) => comment.spotReviewId !== id
      );
      setComments(updatedComments);
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentData = {
      review: newComment,
      surfSpotId: 1,
      rating: 5,
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
            placeholder="해변 리뷰를 입력해주세요✏️"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button variant="outlined" type="submit">
            등록하기
          </Button>
        </div>
        </form>
        </CommentsWrapper>
        <CommentListWrapper> 
        <CommentListSpot
          comments={comments}
          onUpdate={updateComment}
          onDelete={deleteComment}
          pageInfo={pageInfo}
          setComments={setComments}
          setPageInfo={setPageInfo}
        /></CommentListWrapper>
    </>
  );
};

export default CommentAppSpot;

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

const CommentListWrapper = styled.div`
  position: absolute;
  right: 2rem;
  top: 3rem;
  width: 63%;
`