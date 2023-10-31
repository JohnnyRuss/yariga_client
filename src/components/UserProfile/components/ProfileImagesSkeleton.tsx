import React from "react";

import { Box, Skeleton } from "@mui/material";

const ProfileImagesSkeleton: React.FC = () => {
  return (
    <Box
      width="100%"
      maxWidth="440px"
      maxHeight="330px"
      position="relative"
      sx={{
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
      }}
    >
      <Skeleton variant="rectangular" width="100%" height="100%" />

      <Skeleton
        sx={{
          top: "35px",
          right: "0px",
          width: "78px",
          height: "78px",
          position: "absolute",
          transform: "translateX(50%)",
          borderRadius: "100%",
        }}
      />

      <Skeleton
        sx={{
          position: "absolute",
          bottom: "8px",
          left: "15px",
          width: "45%",
          height: "60px",
        }}
      />
    </Box>
  );
};

export default ProfileImagesSkeleton;
