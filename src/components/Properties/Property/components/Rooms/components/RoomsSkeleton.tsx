import { nanoid } from "@reduxjs/toolkit";

import { Box, Stack, Skeleton } from "@mui/material";

const RoomsSkeleton: React.FC = () => {
  return (
    <Box mt="10px">
      <Skeleton
        variant="text"
        width="150px"
        sx={{ fontSize: 18, marginBottom: "25px" }}
      />

      <Stack
        direction="row"
        flexWrap="wrap"
        gap={{ xs: "10px 20px", md: "20px 50px" }}
      >
        {Array.from(new Array(12)).map(() => (
          <Skeleton key={nanoid()} sx={{ flexBasis: ["120px", "180px"] }} />
        ))}
      </Stack>
    </Box>
  );
};

export default RoomsSkeleton;
