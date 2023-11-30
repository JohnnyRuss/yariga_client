import { useAppSelector } from "store/hooks";

import {
  selectConversationStatus,
  selectDeleteConversationStatus,
} from "store/selectors/chat.selectors";

import { Stack } from "@mui/material";
import * as UI from "./components/Feed";
import { Spinner } from "components/Layouts";

type FeedT = {};

const Feed: React.FC<FeedT> = () => {
  const deletionStatus = useAppSelector(selectDeleteConversationStatus);
  const conversationStatus = useAppSelector(selectConversationStatus);

  return (
    <Stack flex={5} component="aside" position="relative">
      {deletionStatus.loading && <Spinner />}

      <UI.FeedHeader loading={conversationStatus.loading} />

      <UI.FeedWall loading={conversationStatus.loading} />

      <UI.FeedForm
        disabled={deletionStatus.loading || conversationStatus.loading}
      />
    </Stack>
  );
};

export default Feed;
