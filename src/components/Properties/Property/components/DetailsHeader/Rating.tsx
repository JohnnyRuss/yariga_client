import React from "react";

import { Star } from "@mui/icons-material";
import { Box, Rating as MuiRating } from "@mui/material";

interface RatingT {}

const Rating: React.FC<RatingT> = () => {
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <MuiRating
        name="text-feedback"
        value={4.5}
        readOnly
        precision={0.5}
        emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{4.8}</Box>
    </Box>
  );
};

export default Rating;