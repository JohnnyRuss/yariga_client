import React from "react";

import { Stack, Box, Skeleton } from "@mui/material";

const ReviewCardSkeleton: React.FC = () => {
  return (
    <Stack
      p="25px"
      pb="30px"
      gap="30px"
      borderRadius="20px"
      bgcolor="app_bg.main"
      direction={{ xs: "column", md: "row" }}
    >
      <Stack direction="row" gap="15px">
        <Skeleton
          variant="rectangular"
          sx={{
            width: "70px",
            height: "70px",
            borderRadius: "10px",
          }}
        />

        <Stack>
          <Skeleton variant="text" width="110px" />
          <Skeleton variant="text" width="90px" sx={{ fontSize: "14px" }} />
          <Skeleton variant="text" width="60px" sx={{ fontSize: "14px" }} />
        </Stack>
      </Stack>

      <Stack maxWidth="570px" gap="15px" flex={1}>
        <Box width="100%">
          <Skeleton variant="text" width="100%" sx={{ fontSize: "14px" }} />
          <Skeleton variant="text" width="100%" sx={{ fontSize: "14px" }} />
          <Skeleton variant="text" width="80%" sx={{ fontSize: "14px" }} />
        </Box>

        <Stack direction="row" gap="10px" flexWrap="wrap">
          <Skeleton
            variant="rectangular"
            sx={{
              width: "100px",
              height: "32px",
              borderRadius: "18px",
            }}
          />

          <Skeleton
            variant="rectangular"
            sx={{
              width: "100px",
              height: "32px",
              borderRadius: "18px",
            }}
          />

          <Skeleton
            variant="rectangular"
            sx={{
              width: "100px",
              height: "32px",
              borderRadius: "18px",
            }}
          />
        </Stack>
      </Stack>

      <Stack ml={{ md: "auto" }} gap="15px">
        <Stack direction="row" alignItems="center" gap="10px">
          <Skeleton width="190px" height="35px" />
        </Stack>

        <Stack direction="row" gap="15px">
          <Skeleton
            variant="rectangular"
            sx={{ borderRadius: "18px" }}
            width="90px"
            height="38px"
          />

          <Skeleton
            variant="rectangular"
            sx={{ borderRadius: "18px" }}
            width="90px"
            height="38px"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ReviewCardSkeleton;
