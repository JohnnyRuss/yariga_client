import { useAppSelector } from "store/hooks";

import {
  selectDeleteConversationStatus,
  selectConversationStatus,
} from "store/selectors/chat.selectors";

import { Stack } from "@mui/material";
import FeedForm from "./FeedForm/FeedForm";
import FeedHeader from "./FeedHeader/FeedHeader";
import FeedWall from "./FeedWall/FeedWall";
import { Spinner } from "components/Layouts";

type FeedT = {};

const Feed: React.FC<FeedT> = () => {
  const deletionStatus = useAppSelector(selectDeleteConversationStatus);
  const conversationStatus = useAppSelector(selectConversationStatus);

  return (
    <Stack component="aside" flex={6} flexBasis="60%" position="relative">
      {deletionStatus.loading && <Spinner />}

      <FeedHeader loading={conversationStatus.loading} />

      <FeedWall loading={conversationStatus.loading} />

      <FeedForm
        disabled={deletionStatus.loading || conversationStatus.loading}
      />
    </Stack>
  );
};

export default Feed;
