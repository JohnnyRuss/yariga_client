import { Stack, Skeleton, Typography } from "@mui/material";

const FeedWallStarterSkeleton: React.FC = () => {
  return (
    <Stack width="100%" alignItems="center" py={15} gap={1} order={1}>
      <Skeleton
        variant="circular"
        width="70px"
        height="70px"
        sx={{ minWidth: "70px" }}
      />

      <Skeleton variant="text" width="70px" />

      <Skeleton variant="text" width="120px" />

      <Skeleton variant="rounded" width="70px" height="25px" />

      <Typography fontWeight={600} fontSize={16} color="app_text.main">
        Yariga
      </Typography>
    </Stack>
  );
};

export default FeedWallStarterSkeleton;
