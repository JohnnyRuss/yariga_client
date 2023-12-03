import { Skeleton, Stack, Box } from "@mui/material";

const LinkPreviewSkeleton: React.FC = () => {
  return (
    <Stack
      width="100%"
      bgcolor="app_bg.main"
      color="app_text.dark"
      borderRadius="10px"
      overflow="hidden"
      mt="5px"
    >
      <Skeleton variant="text" sx={{ margin: 1 }} />

      <Box component="figure" width="100%" sx={{ aspectRatio: "16/9" }}>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>

      <Box p={1}>
        <Skeleton variant="text" />

        <Skeleton variant="text" width="100px" />

        <Skeleton variant="text" width="100px" />

        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
      </Box>
    </Stack>
  );
};

export default LinkPreviewSkeleton;
