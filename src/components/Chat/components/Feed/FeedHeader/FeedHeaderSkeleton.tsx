import { Box, Stack, Skeleton, useTheme } from "@mui/material";

const FeedHeaderSkeleton: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      p={1}
      zIndex={9}
      position="relative"
      borderBottom="1px solid"
      borderColor="app_text.contrastText"
      bgcolor="app_bg.main"
    >
      <Stack gap={1} height="100%" direction="row" alignItems="center">
        <Skeleton
          variant="circular"
          width="35px"
          height="35px"
          sx={{
            minWidth: "35px",
            [theme.breakpoints.up("app_desktop")]: {
              display: "none",
            },
          }}
        />

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
        <Stack direction="row" alignItems="center" gap={1} ml="auto">
          <Skeleton
            variant="circular"
            width="35px"
            height="35px"
            sx={{
              minWidth: "35px",
              display: "none",
              [theme.breakpoints.up("app_mobile")]: {
                display: "flex",
              },
            }}
          />

          <Skeleton
            variant="circular"
            width="35px"
            height="35px"
            sx={{
              minWidth: "35px",
              display: "none",
              [theme.breakpoints.up("app_mobile")]: {
                display: "flex",
              },
            }}
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
