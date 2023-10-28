import React from "react";

import { Skeleton, Box, Stack } from "@mui/material";

const AgentCredentialsSkeleton: React.FC = () => {
  return (
    <Box
      boxShadow={3}
      sx={{
        overflow: "hidden",
        borderRadius: "10px",
        backgroundColor: "app_bg.main",
      }}
    >
      <Box component="figure" sx={{ width: "100%", height: "200px" }}>
        <Skeleton
          variant="rectangular"
          sx={{ width: "100%", height: "100%" }}
        />
      </Box>

      <Stack
        sx={{ padding: "0 20px", transform: "translateY(-40px)" }}
        gap="30px"
      >
        <Stack direction="row" gap={2} width="100%">
          <Skeleton
            variant="circular"
            sx={{ width: "100px", height: "100px" }}
          />

          <Box mt="50px">
            <Skeleton variant="text" width="150px" />

            <Skeleton variant="text" width="70px" sx={{ fontSize: 14 }} />
          </Box>
        </Stack>

        <Stack width="100%" gap="15px">
          <Stack direction="row" gap={2}>
            <Skeleton variant="text" width="25%" sx={{ fontSize: 14 }} />

            <Skeleton variant="text" width="75%" sx={{ fontSize: 14 }} />
          </Stack>

          <Stack direction="row" gap={2}>
            <Skeleton variant="text" width="25%" sx={{ fontSize: 14 }} />

            <Skeleton variant="text" width="75%" sx={{ fontSize: 14 }} />
          </Stack>

          <Stack direction="row" gap={2}>
            <Skeleton variant="text" width="25%" sx={{ fontSize: 14 }} />

            <Skeleton variant="text" width="75%" sx={{ fontSize: 14 }} />
          </Stack>

          <Stack direction="row" gap={2}>
            <Skeleton variant="text" width="25%" sx={{ fontSize: 14 }} />

            <Skeleton variant="text" width="75%" sx={{ fontSize: 14 }} />
          </Stack>

          <Stack direction="row" gap={2}>
            <Skeleton variant="text" width="25%" sx={{ fontSize: 14 }} />

            <Skeleton variant="text" width="75%" sx={{ fontSize: 14 }} />
          </Stack>

          <Stack direction="row" gap={2}>
            <Skeleton variant="text" width="25%" sx={{ fontSize: 14 }} />

            <Skeleton variant="text" width="75%" sx={{ fontSize: 14 }} />
          </Stack>

          <Stack direction="row" gap={2}>
            <Skeleton variant="text" width="25%" sx={{ fontSize: 14 }} />

            <Skeleton variant="text" width="75%" sx={{ fontSize: 14 }} />
          </Stack>

          <Stack direction="row" gap={2}>
            <Skeleton variant="text" width="25%" sx={{ fontSize: 14 }} />

            <Skeleton variant="text" width="75%" sx={{ fontSize: 14 }} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AgentCredentialsSkeleton;
