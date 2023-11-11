import React from "react";

import { Box, Skeleton } from "@mui/material";

const ProfileImagesSkeleton: React.FC = () => {
  return (
    <Box
      width="min(440px,100%)"
      maxWidth="440px"
      height={{ xs: "300px", md: "350px" }}
      position="relative"
      sx={{
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        borderTopRightRadius: ["10px", "0px"],
        borderBottomRightRadius: ["10px", "0px"],
      }}
    >
      <Skeleton variant="rectangular" width="100%" height="100%" />

      <Skeleton
        sx={{
          width: "78px",
          height: "78px",
          position: "absolute",
          borderRadius: "100%",
          top: ["auto", "35px"],
          bottom: ["0px", "auto"],
          right: ["auto", "0px"],
          left: ["0px", "auto"],
          transform: ["translate(50%,50%)", "translateX(50%)"],
        }}
      />

      <Skeleton
        sx={{
          position: "absolute",
          left: ["auto", "20px"],
          right: ["20px", "auto"],
          bottom: ["auto", "10px"],
          top: ["10px", "auto"],
          width: "45%",
          height: "60px",
        }}
      />
    </Box>
  );
};

export default ProfileImagesSkeleton;
