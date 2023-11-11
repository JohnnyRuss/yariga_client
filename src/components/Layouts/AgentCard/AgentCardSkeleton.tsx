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
        minHeight: "220px",
        flexDirection: ["column", "row"],
        maxHeight: ["auto", "230px"],
        position: "relative",
        padding: "8px",
        borderRadius: "10px",
      }}
    >
      <Skeleton
        variant="text"
        width="40px"
        sx={{
          top: "10px",
          right: "10px",
          fontSize: 28,
          position: "absolute",
          color: "app_text.dark",
        }}
      />

      <CardMedia
        component="figure"
        sx={{
          width: ["100%", "35%"],
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

          <Stack
            width="100%"
            mt={{ xs: "10px", md: "0px" }}
            direction={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "flex-start", md: "space-between" }}
          >
            <Stack gap={1} width="100%">
              <Skeleton variant="text" width="60%" sx={{ fontSize: 14 }} />

              <Skeleton variant="text" width="70%" sx={{ fontSize: 14 }} />
            </Stack>

            <Stack
              gap={1}
              width="100%"
              alignItems={{ xs: "flex-start", md: "flex-end" }}
            >
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
