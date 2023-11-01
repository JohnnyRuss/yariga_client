import React from "react";

import { Stack, Skeleton } from "@mui/material";

const ViewSkeleton: React.FC = () => {
  return (
    <Stack mt="10px" direction="row" gap="20px" height="28.5vw">
      <Skeleton
        variant="rectangular"
        width="70%"
        height="100%"
        sx={{ borderRadius: "10px" }}
      />

      <Stack width="30%" gap="22px">
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
