import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import { Box, Skeleton, Stack } from "@mui/material";

const DescriptionSkeleton: React.FC = () => {
  return (
    <Box mt="10px">
      <Skeleton
        variant="text"
        width="150px"
        sx={{ fontSize: 18, marginBottom: "25px" }}
      />

      <Stack flexWrap="wrap" gap="20px 50px">
        {Array.from(new Array(3)).map(() => {
          return Array.from(new Array(4)).map((_, index, arr) => (
            <Skeleton
              key={nanoid()}
              width={index === arr.length - 1 ? "50%" : "100%"}
            />
          ));
        })}
      </Stack>
    </Box>
  );
};

export default DescriptionSkeleton;
