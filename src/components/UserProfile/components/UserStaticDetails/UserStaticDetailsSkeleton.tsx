import { Stack, Skeleton } from "@mui/material";

const UserStaticDetailsSkeleton: React.FC = () => {
  return (
    <>
      <Stack gap="6px" mt="30px">
        <Skeleton variant="text" width="150px" sx={{ fontSize: 14 }} />

        <Skeleton
          variant="rectangular"
          width="100%"
          height="45px"
          sx={{ borderRadius: "5px" }}
        />
      </Stack>

      <Stack direction={{ xs: "column", md: "row" }} gap={3} mt="20px">
        <Stack flex={1} gap="6px">
          <Skeleton variant="text" width="150px" sx={{ fontSize: 14 }} />

          <Skeleton
            variant="rectangular"
            width="100%"
            height="45px"
            sx={{ borderRadius: "5px" }}
          />
        </Stack>

        <Stack flex={1} gap="6px">
          <Skeleton variant="text" width="150px" sx={{ fontSize: 14 }} />

          <Skeleton
            variant="rectangular"
            width="100%"
            height="45px"
            sx={{ borderRadius: "5px" }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default UserStaticDetailsSkeleton;
