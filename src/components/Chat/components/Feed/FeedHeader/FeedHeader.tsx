import * as UI from "./";
import { Box, Stack } from "@mui/material";

type FeedHeaderT = {
  loading: boolean;
  isRead: boolean;
};

const FeedHeader: React.FC<FeedHeaderT> = ({ loading, isRead }) => {
  return loading ? (
    <UI.FeedHeaderSkeleton />
  ) : (
    <Box p={1} borderBottom="1px solid" borderColor="app_text.contrastText">
      <Stack
        direction="row"
        gap={1}
        justifyContent="space-between"
        height="100%"
      >
        <UI.FeedHeaderUser />

        <UI.FeedHeaderActions isRead={isRead} />
      </Stack>
    </Box>
  );
};

export default FeedHeader;
