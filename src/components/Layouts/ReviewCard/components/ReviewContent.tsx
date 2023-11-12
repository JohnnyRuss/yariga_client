import React from "react";

import { Stack } from "@mui/material";
import ReviewContentChip from "./ReviewContentChip";
import ReviewContentDescription from "./ReviewContentDescription";

interface ReviewContentT {}

const ReviewContent: React.FC<ReviewContentT> = (props) => {
  return (
    <Stack maxWidth="570px" gap="15px">
      <ReviewContentDescription />

      <Stack direction="row" gap="10px" flexWrap="wrap">
        <ReviewContentChip caption="EXCELLENT" type="normal" />

        <ReviewContentChip caption="GREAT" type="normal" />

        <ReviewContentChip caption="BEST SERVICE" type="normal" />

        <ReviewContentChip caption="BAD SERVICE" type="danger" />

        <ReviewContentChip caption="UNEXPECTED" type="danger" />
      </Stack>
    </Stack>
  );
};

export default ReviewContent;
