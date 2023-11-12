import React from "react";

import { Rating, Typography, Stack } from "@mui/material";

interface ReviewRatingT {}

const ReviewRating: React.FC<ReviewRatingT> = (props) => {
  return (
    <Stack direction="row" alignItems="center" gap="10px">
      <Typography fontSize={22} fontWeight={600}>
        4.3
      </Typography>
      <Rating value={4.3} sx={{ marginTop: "-2px" }} />
    </Stack>
  );
};

export default ReviewRating;
