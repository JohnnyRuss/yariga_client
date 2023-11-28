import { Stack } from "@mui/material";
import FeedForm from "./FeedForm/FeedForm";
import FeedHeader from "./FeedHeader/FeedHeader";
import FeedWall from "./FeedWall/FeedWall";

type FeedT = {};

const Feed: React.FC<FeedT> = () => {
  return (
    <Stack component="aside" flex={6} flexBasis="60%">
      <FeedHeader />

      <FeedWall />

      <FeedForm />
    </Stack>
  );
};

export default Feed;
