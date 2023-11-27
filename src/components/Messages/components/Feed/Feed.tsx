import { Stack, Box } from "@mui/material";
import FeedForm from "./components/FeedForm";
import FeedHeader from "./components/FeedHeader";
import FeedWallStarter from "./components/FeedWallStarter";
import FeedWall from "./components/FeedWall";

type FeedT = {};

const Feed: React.FC<FeedT> = () => {
  return (
    <Stack component="aside" flex={6} flexBasis="60%">
      <FeedHeader />

      <Box p={1} maxHeight="100%" className="custom_scrollbar">
        <FeedWallStarter />

        <FeedWall />
      </Box>

      <FeedForm />
    </Stack>
  );
};

export default Feed;
