import React from "react";
import Rating from "@mui/lab/Rating";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const AverageRating = ({ comments }) => {

    // const calculateAverageRating = (comments) => {
    //     if (comments.rating === 0) {
    //       return 0;
    //     }
      
    //     const sum = comments.reduce((acc, comment) => acc + comment.rating, 0);
    //     return sum / comments.rating;
    //   };
      
//   const averageRating = calculateAverageRating(comments);

  return (
    <Box>
      <Typography component="legend">평균 평점</Typography>
      <Rating
        // value={averageRating}
        precision={0.1}
        icon={<StarIcon fontSize="inherit" />}
        readOnly
      />
    </Box>
  );
};

export default AverageRating;
