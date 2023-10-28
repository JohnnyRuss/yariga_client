import React from "react";

import {
  Card,
  CardMedia,
  CardContent,
  Skeleton,
  Stack,
  Box,
} from "@mui/material";

const AgentCardSkeleton: React.FC = () => {
  return (
    <Card
      elevation={4}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        maxHeight: "230px",
        position: "relative",
        padding: "8px",
        borderRadius: "10px",
      }}
    >
      <Skeleton
        variant="text"
        width="40px"
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          color: "app_text.dark",
          fontSize: 28,
        }}
      />

      <CardMedia
        component="figure"
        sx={{
          width: "35%",
          height: "200px",
          borderRadius: "10px",
          overflow: "hidden",
          border: "1px solid rgba(176, 176, 176, 0.3)",
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{ width: "100%", height: "100%" }}
        />
      </CardMedia>

      <CardContent sx={{ width: "100%" }}>
        <Stack width="100%" height="100%" justifyContent="space-between">
          <Box>
            <Skeleton variant="text" width="40%" sx={{ fontSize: 22 }} />

            <Skeleton variant="text" width="100px" sx={{ fontSize: 14 }} />
          </Box>

          <Stack direction="row" justifyContent="space-between" width="100%">
            <Stack gap={1} width="100%">
              <Skeleton variant="text" width="60%" sx={{ fontSize: 14 }} />

              <Skeleton variant="text" width="70%" sx={{ fontSize: 14 }} />
            </Stack>

            <Stack alignItems="flex-end" gap={1} width="100%">
              <Skeleton variant="text" width="50%" sx={{ fontSize: 14 }} />

              <Skeleton variant="text" width="30%" sx={{ fontSize: 14 }} />
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default AgentCardSkeleton;
