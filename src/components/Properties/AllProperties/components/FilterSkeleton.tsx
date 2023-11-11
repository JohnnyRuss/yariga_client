import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import { Stack, Skeleton } from "@mui/material";

const FilterSkeleton: React.FC = () => {
  return (
    <Stack
      gap={3}
      width="100%"
      flexWrap="wrap"
      direction={{ xs: "column", md: "row" }}
    >
      {Array.from(new Array(5)).map(() => (
        <Skeleton
          key={nanoid()}
          height="60px"
          width="100%"
          variant="rectangular"
          sx={{ flex: ["auto", 1], borderRadius: "5px" }}
        />
      ))}

      <Skeleton
        variant="rectangular"
        height="60px"
        width="130px"
        sx={{ borderRadius: "5px" }}
      />
    </Stack>
  );
};

export default FilterSkeleton;
