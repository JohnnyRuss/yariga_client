import React from "react";

import { Stack, Box, Skeleton } from "@mui/material";

const HeaderSkeleton: React.FC = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack gap="9px" width="100%">
        <Stack direction="row" alignItems="center" gap="15px">
          <Skeleton variant="text" width="200px" sx={{ fontSize: 18 }} />

          <Skeleton variant="text" width="100px" sx={{ fontSize: 18 }} />
        </Stack>

        <Skeleton variant="text" width="50%" sx={{ fontSize: 22 }} />

        <Skeleton variant="text" width="35%" sx={{ fontSize: 14 }} />
      </Stack>

      <Box>
        <Stack gap="9px">
          <Stack direction="row" alignItems="center" gap={2} width={200}>
            <Skeleton width="80%" />

            <Skeleton width="20%" />
          </Stack>

          <Box>
            <Skeleton variant="text" width="80px" />

            <Skeleton variant="text" width="150px" sx={{ fontSize: 25 }} />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default HeaderSkeleton;
