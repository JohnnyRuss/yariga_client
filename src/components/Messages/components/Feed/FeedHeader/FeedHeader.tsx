import { Box, Stack } from "@mui/material";
import FeedHeaderSkeleton from "./FeedHeaderSkeleton";
import FeedHeaderUser from "./FeedHeaderUser";
import FeedHeaderActions from "./FeedHeaderActions";

type FeedHeaderT = {
  loading: boolean;
};

const FeedHeader: React.FC<FeedHeaderT> = ({ loading }) => {
  return loading ? (
    <FeedHeaderSkeleton />
  ) : (
    <Box p={1} borderBottom="1px solid" borderColor="app_text.contrastText">
      <Stack
        direction="row"
        gap={1}
        justifyContent="space-between"
        height="100%"
      >
        <FeedHeaderUser />

        <FeedHeaderActions />
      </Stack>
    </Box>
  );
};

export default FeedHeader;
