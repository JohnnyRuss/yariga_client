import { Box, Stack, Skeleton } from "@mui/material";

const FeedHeaderSkeleton: React.FC = () => {
  return (
    <Box p={1} borderBottom="1px solid" borderColor="app_text.contrastText">
      <Stack
        gap={1}
        height="100%"
        direction="row"
        justifyContent="space-between"
      >
        {/* AVATAR */}
        <Stack direction="row" gap={1}>
          <Skeleton
            variant="circular"
            width="50px"
            height="50px"
            sx={{ minWidth: "50px" }}
          />

          <Stack mt="4px">
            <Skeleton variant="text" width="70px" />

            <Skeleton variant="text" width="120px" />
          </Stack>
        </Stack>

        {/* ACTIONS */}
        <Stack direction="row" alignItems="center" gap={1}>
          <Skeleton
            variant="circular"
            width="35px"
            height="35px"
            sx={{ minWidth: "35px" }}
          />

          <Skeleton
            variant="circular"
            width="35px"
            height="35px"
            sx={{ minWidth: "35px" }}
          />

          <Skeleton
            variant="circular"
            width="35px"
            height="35px"
            sx={{ minWidth: "35px", marginLeft: "10px" }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default FeedHeaderSkeleton;
