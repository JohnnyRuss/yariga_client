import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import {
  Stack,
  Box,
  Divider,
  Card,
  CardMedia,
  CardContent,
  Skeleton,
} from "@mui/material";

const PropertyCardHorizontalSkeleton: React.FC = () => {
  return (
    <Card
      sx={{
        flex: 1,
        flexBasis: "400px",
        display: "flex",
        flexDirection: ["column", "row"],
        maxWidth: "520px",
        alignItems: "stretch",
        gap: "8px",
        padding: "8px",
        height: "fit-content",
        borderRadius: "10px",
      }}
    >
      <CardMedia sx={{ width: ["100%", "40%"] }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          sx={{
            borderRadius: "10px",
            height: ["200px", "100%"],
          }}
        />
      </CardMedia>

      <CardContent
        sx={{
          width: ["100%", "60%"],
          marginTop: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          justifyContent: "flex-start",
          padding: "0 !important",
          paddingBottom: "8px !important",
        }}
      >
        <Skeleton variant="text" width="80%" />

        <Stack direction="row" justifyContent="space-between" gap={1}>
          <Skeleton
            variant="rectangular"
            width="60%"
            height="20px"
            sx={{ borderRadius: "5px" }}
          />

          <Skeleton
            variant="rectangular"
            width="60%"
            height="20px"
            sx={{ borderRadius: "5px" }}
          />
        </Stack>

        <Stack direction="row" gap={1}>
          <Skeleton
            variant="rectangular"
            height="25px"
            sx={{ borderRadius: "15px", flex: 1 }}
          />

          <Skeleton
            variant="rectangular"
            height="25px"
            sx={{ borderRadius: "15px", flex: 1 }}
          />
        </Stack>

        <Skeleton variant="text" width="80%" />

        <Divider />

        <Stack direction="row" width="100%" gap={1}>
          <Skeleton
            variant="circular"
            width="42px"
            height="42px"
            sx={{
              minWidth: "42px",
            }}
          />

          <Box width="100%">
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="60%" />
          </Box>
        </Stack>

        <Divider />

        <Stack direction="row" gap={1}>
          {Array.from(new Array(3)).map(() => (
            <Skeleton
              key={nanoid()}
              variant="rectangular"
              height="20px"
              sx={{ flex: 1 }}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PropertyCardHorizontalSkeleton;
