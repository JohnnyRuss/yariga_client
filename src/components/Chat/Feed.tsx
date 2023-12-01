/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useAppSelector } from "store/hooks";

import { useChatContext } from "providers/ChatProvider";

import {
  selectConversationStatus,
  selectConversationOrigin,
  selectDeleteConversationStatus,
} from "store/selectors/chat.selectors";

import { Stack } from "@mui/material";
import * as UI from "./components/Feed";
import { Spinner } from "components/Layouts";

const Feed: React.FC = () => {
  const deletionStatus = useAppSelector(selectDeleteConversationStatus);
  const conversationStatus = useAppSelector(selectConversationStatus);

  const conversationRoot = useAppSelector(selectConversationOrigin);

  const { getAdressat, checkConversationIsRead } = useChatContext();

  const [conversationIsRead, setConversationIsRead] = useState(false);

  // const { isRead } = checkConversationIsRead(conversationRoot);
  const adressat = getAdressat(conversationRoot.participants);

  useEffect(() => {
    if (conversationStatus.loading || !conversationRoot._id) return;

    const { isRead } = checkConversationIsRead(conversationRoot);
    console.log({ isRead });
    // setConversationIsRead(isRead);
  }, [conversationRoot, conversationStatus.loading]);

  return (
    <Stack flex={5} component="aside" position="relative">
      {deletionStatus.loading && <Spinner />}

      <UI.FeedHeader
        loading={conversationStatus.loading}
        isRead={conversationIsRead}
      />

      <UI.FeedWall
        isRead={conversationIsRead}
        adressat={adressat}
        loading={conversationStatus.loading}
      />

      <UI.FeedForm
        disabled={deletionStatus.loading || conversationStatus.loading}
      />
    </Stack>
  );
};

export default Feed;
