import React from "react";

import { Stack } from "@mui/material";
import { Text } from "components/Layouts";
import ReviewContentChip from "./ReviewContentChip";

interface ReviewContentT {
  description: string;
  score: number;
}

const ReviewContent: React.FC<ReviewContentT> = ({ description, score }) => {
  const chipType = score <= 3 ? "danger" : "normal";
  const caption =
    score >= 4.5
      ? "EXCELLENT"
      : score >= 4
      ? "BEST SERVICE"
      : score >= 3.5
      ? "GREAT"
      : score >= 3
      ? "BAD SERVICE"
      : "UNEXPECTED";

  return (
    <Stack maxWidth="570px" gap="15px">
      <Text text={description} />

      <Stack direction="row" gap="10px" flexWrap="wrap">
        <ReviewContentChip caption={caption} type={chipType} />
      </Stack>
    </Stack>
  );
};

export default ReviewContent;
