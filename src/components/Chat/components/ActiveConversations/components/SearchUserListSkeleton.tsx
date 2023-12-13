import { nanoid } from "@reduxjs/toolkit";
import { Stack, Skeleton } from "@mui/material";

const SearchUserListSkeleton: React.FC = () => {
  return (
    <Stack>
      {Array.from(new Array(8)).map((item) => (
        <Stack
          key={nanoid()}
          gap={1}
          pb="5px"
          width="100%"
          direction="row"
          alignItems="center"
        >
          <Skeleton
            variant="circular"
            width="50px"
            height="50px"
            sx={{ minWidth: "50px" }}
          />

          <Stack>
            <Skeleton variant="text" width="100px" />
            <Skeleton variant="text" width="140px" />
          </Stack>

          <Skeleton
            variant="rectangular"
            width="70px"
            height="25px"
            sx={{ marginLeft: "auto" }}
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default SearchUserListSkeleton;
