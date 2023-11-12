import React from "react";

import { Box } from "@mui/material";

interface ReviewContentChipT {
  caption: string;
  type: "danger" | "normal";
}

const ReviewContentChip: React.FC<ReviewContentChipT> = ({ caption, type }) => {
  return (
    <Box
      sx={{
        color: type === "normal" ? "app_blue.light" : "error.main",
        borderColor: type === "normal" ? "app_blue.light" : "error.main",
        border: "1px solid",
        borderRadius: "18px",
        padding: "7px 10px",
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {caption}
    </Box>
  );
};

export default ReviewContentChip;
