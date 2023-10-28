import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import { Skeleton, Box, Stack, Divider } from "@mui/material";

const AgentDetailsSkeleton: React.FC = () => {
  return (
    <Box
      boxShadow={3}
      sx={{
        backgroundColor: "app_bg.main",
        borderRadius: "10px",
        padding: "20px",
        height: "100%",
      }}
    >
      <Skeleton
        variant="text"
        width="150px"
        sx={{ marginBottom: "15px", fontSize: 18 }}
      />

      <Divider />

      <Skeleton variant="text" sx={{ marginTop: "20px" }} />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="50%" />

      <Stack gap="10px" mt="30px" pb="25px">
        <Stack direction="row" alignItems="center" gap={2}>
          <Skeleton variant="text" width="20%" sx={{ fontSize: 14 }} />

          <Skeleton variant="text" width="20%" sx={{ fontSize: 14 }} />
        </Stack>

        <Stack direction="row" alignItems="center" gap={2}>
          <Skeleton variant="text" width="20%" sx={{ fontSize: 14 }} />

          <Skeleton variant="text" width="20%" sx={{ fontSize: 14 }} />
        </Stack>

        <Stack direction="row" alignItems="center" gap={2}>
          <Skeleton variant="text" width="20%" sx={{ fontSize: 14 }} />

          <Skeleton variant="text" width="20%" sx={{ fontSize: 14 }} />
        </Stack>

        <Stack direction="row" alignItems="center" gap={2}>
          <Skeleton variant="text" width="20%" sx={{ fontSize: 14 }} />

          <Skeleton variant="text" width="20%" sx={{ fontSize: 14 }} />
        </Stack>
      </Stack>

      <Divider />

      <Skeleton
        variant="text"
        width="100px"
        sx={{ fontSize: 18, marginTop: "15px" }}
      />

      <Box display="flex" flexWrap="wrap" gap={4} mt="20px">
        {Array.from(new Array(3)).map(() => (
          <Stack
            key={nanoid()}
            alignItems="center"
            boxShadow={4}
            gap={1}
            sx={{ flex: 1, padding: "20px", borderRadius: "10px" }}
          >
            <Skeleton variant="text" width="140px" />
            <Skeleton variant="text" width="60px" />
            <Skeleton variant="circular" width="100px" height="100px" />
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

export default AgentDetailsSkeleton;
