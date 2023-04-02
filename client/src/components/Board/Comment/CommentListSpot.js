import React from 'react';
import CommentSpot from './CommentSpot';
import styled from 'styled-components';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import axios from "axios";

const CommentListSpot = ({ comments, pageInfo, onUpdate, onDelete, surfSpotId, setComments, setPageInfo }) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/spot-reviews?page=${page}&size=10&surfSpotId=1`
      );
      setComments(response.data.data);
      setTotalPages(response.data.pageInfo.totalPages);
    }
    fetchData();
  }, [page]);


  const handlePageChange = (event, value) => {
    setPage(value);
  };

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
      <PaginationWrapper>
      <Stack spacing={2} direction="row">
      <Pagination count={totalPages} page={page} onChange={handlePageChange} />
      </Stack></PaginationWrapper>
    </Wrapper>
  );
};


export default CommentListSpot;

const Wrapper = styled.div`
  padding-bottom: 0rem;
`

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`