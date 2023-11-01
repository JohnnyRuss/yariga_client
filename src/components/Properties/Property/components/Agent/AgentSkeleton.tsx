import React from "react";

import { Paper, Stack, Skeleton } from "@mui/material";

const AgentSkeleton: React.FC = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        padding: "35px 25px 25px 25px",
        border: "1px solid",
        borderColor: "app_text.contrastText",
        borderRadius: "10px",
      }}
    >
      <Stack mt="10px" justifyContent="center" alignItems="center" gap="15px">
        <Skeleton variant="circular" width={90} height={90} />

        <Stack alignItems="center" width="100%">
          <Skeleton variant="text" width="200px" sx={{ fontSize: 18 }} />

          <Skeleton variant="text" width="150px" sx={{ fontSize: 14 }} />

          <Skeleton variant="text" width="170px" sx={{ fontSize: 14 }} />

          <Skeleton variant="text" width="120px" sx={{ fontSize: 16 }} />

          <Stack direction="row" width="100%" gap="20px" mt="10px">
            <Skeleton
              variant="rectangular"
              height="40px"
              sx={{ flex: 1, borderRadius: "5px" }}
            />

            <Skeleton
              variant="rectangular"
              height="40px"
              sx={{ flex: 1, borderRadius: "5px" }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default AgentSkeleton;
