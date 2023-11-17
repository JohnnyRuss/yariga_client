import React from "react";

import { Rating, Typography, Stack } from "@mui/material";

interface ReviewRatingT {
  score: number;
}

const ReviewRating: React.FC<ReviewRatingT> = ({ score }) => {
  return (
    <Stack direction="row" alignItems="center" gap="10px">
      <Typography fontSize={22} fontWeight={600}>
        {score.toFixed(1)}
      </Typography>

      <Rating
        value={score}
        precision={0.1}
        sx={{ marginTop: "-2px", pointerEvents: "none" }}
      />
    </Stack>
  );
};

export default ReviewRating;
