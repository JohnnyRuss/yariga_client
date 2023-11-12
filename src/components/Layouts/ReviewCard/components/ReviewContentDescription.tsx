import React from "react";

import { Typography } from "@mui/material";

interface ReviewContentDescriptionT {}

const ReviewContentDescription: React.FC<ReviewContentDescriptionT> = (
  props
) => {
  return (
    <Typography color="app_text.main" fontSize={14}>
      Friendly service Josh, Lunar and everyone at Just Property in Hastings
      deserved a big Thank You from us for moving us from Jakarta to Medan
      during the lockdown.
    </Typography>
  );
};

export default ReviewContentDescription;
