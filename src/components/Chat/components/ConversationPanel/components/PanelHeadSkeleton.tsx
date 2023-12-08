import { Box, Skeleton, Stack } from "@mui/material";

const PanelHeadSkeleton: React.FC = () => {
  return (
    <Box width="100%" height="215px">
      <Stack width="100%" alignItems="center" p={1} pt={2} gap={1}>
        <Skeleton variant="circular" width="70px" height="70px" />

        <Skeleton variant="text" width="120px" />

        <Skeleton variant="text" width="180px" />
      </Stack>

      <Stack sx={{ width: "100%" }} gap={1} direction="row" px={1}>
        <Skeleton variant="rounded" width="50%" height="40px" />

        <Skeleton variant="rounded" width="50%" height="40px" />
      </Stack>
    </Box>
  );
};

export default PanelHeadSkeleton;
