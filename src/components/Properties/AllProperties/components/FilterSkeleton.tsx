import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import { Stack, Skeleton } from "@mui/material";

const FilterSkeleton: React.FC = () => {
  return (
    <Stack direction="row" flexWrap="wrap" gap={3}>
      {Array.from(new Array(5)).map(() => (
        <Skeleton
          key={nanoid()}
          variant="rectangular"
          height="60px"
          sx={{ flex: 1, borderRadius: "5px" }}
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
