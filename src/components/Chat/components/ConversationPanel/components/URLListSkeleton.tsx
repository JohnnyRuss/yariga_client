import { nanoid } from "@reduxjs/toolkit";
import { Skeleton, Stack, Box } from "@mui/material";

const URLListSkeleton: React.FC = () => {
  return (
    <Box px={1} pr={0} width="100%" height="100%" className="custom_scrollbar">
      {Array.from(new Array(5)).map((item) => (
        <Stack
          key={nanoid()}
          direction="row"
          gap={1}
          alignItems="flex-start"
          width="100%"
        >
          <Skeleton
            variant="rounded"
            width="85px"
            height="85px"
            sx={{ minWidth: "85px" }}
          />

          <Stack pt="3px" width="100%">
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="100%" />
          </Stack>
        </Stack>
      ))}
    </Box>
  );
};

export default URLListSkeleton;
