import React from "react";

import { Skeleton } from "@mui/material";

const UserDetailsHeaderSkeleton: React.FC = () => {
  return (
    <>
      <Skeleton variant="text" width="250px" sx={{ fontSize: 22 }} />
      <Skeleton variant="text" width="150px" sx={{ fontSize: 14 }} />
    </>
  );
};

export default UserDetailsHeaderSkeleton;
