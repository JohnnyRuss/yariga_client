import { Stack, Box, Skeleton } from "@mui/material";

const HeaderSkeleton: React.FC = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
    >
      <Stack gap="9px" width="100%">
        <Stack
          direction="row"
          alignItems="center"
          gap="15px"
          justifyContent={{ xs: "space-between", md: "flex-start" }}
        >
          <Skeleton
            variant="text"
            sx={{ fontSize: 18, width: ["50%", "200px"] }}
          />

          <Skeleton
            variant="text"
            sx={{ fontSize: 18, width: ["60px", "100px"] }}
          />
        </Stack>

        <Skeleton variant="text" sx={{ fontSize: 22, width: ["80%", "50%"] }} />

        <Skeleton variant="text" sx={{ fontSize: 14, width: ["60%", "50%"] }} />
      </Stack>

      <Box sx={{ mt: ["12px", "0px"] }}>
        <Stack gap="9px">
          <Stack direction="row" alignItems="center" gap={2} width={200}>
            <Skeleton width="80%" />

            <Skeleton width="20%" />
          </Stack>

          <Box>
            <Skeleton variant="text" width="80px" />

            <Skeleton variant="text" width="150px" sx={{ fontSize: 25 }} />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default HeaderSkeleton;
