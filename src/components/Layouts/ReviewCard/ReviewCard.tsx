import React from "react";

import { Stack } from "@mui/material";
import ReviewAuthor from "./components/ReviewAuthor";
import ReviewContent from "./components/ReviewContent";
import ReviewRating from "./components/ReviewRating";
import ReviewActions from "./components/ReviewActions";

interface ReviewCardT {}

const ReviewCard: React.FC<ReviewCardT> = () => {
  return (
    <Stack
      p="25px"
      pb="30px"
      gap="30px"
      borderRadius="20px"
      bgcolor="app_bg.main"
      direction={{ xs: "column", md: "row" }}
    >
      <ReviewAuthor />

      <ReviewContent />

      <Stack ml={{ md: "auto" }} gap="15px">
        <ReviewRating />

        <ReviewActions />
      </Stack>
    </Stack>
  );
};

export default ReviewCard;
