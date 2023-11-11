import React from "react";

import { Stack, Skeleton } from "@mui/material";

const ViewSkeleton: React.FC = () => {
  return (
    <Stack
      mt="10px"
      direction={{ xs: "column", md: "row" }}
      gap="20px"
      height={{ xs: "35vh", md: "28.5vw" }}
    >
      <Skeleton
        variant="rectangular"
        height="100%"
        sx={{ borderRadius: "10px", width: ["100%", "70%"] }}
      />

      <Stack
        width={{ xs: "100%", md: "30%" }}
        height={{ xs: "15vh", md: "auto" }}
        flexDirection={{ xs: "row", md: "column" }}
        gap="22px"
      >
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ borderRadius: "10px" }}
        />

        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ borderRadius: "10px" }}
        />
      </Stack>
    </Stack>
  );
};

export default ViewSkeleton;
