import { useAppSelector } from "store/hooks";

import { useSearchParams } from "hooks/utils";
import { useChatContext } from "providers/chat/ChatProvider";

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

  const { getLastMessageAdressat } = useChatContext();
  const adressat = getLastMessageAdressat(
    conversationRoot.participants,
    conversationRoot.lastMessage?.sender?._id || ""
  );

  const { getParamValue } = useSearchParams();
  const isShowingPanel = getParamValue("conversation-panel") === "1";

  return (
    <Stack
      flex={5}
      component="aside"
      position="relative"
      display={{
        xs: isShowingPanel ? "none" : "flex",
        app_desktop_large: "flex",
      }}
    >
      {deletionStatus.loading && <Spinner />}

      <UI.FeedHeader
        loading={conversationStatus.loading}
        isRead={conversationRoot.isRead}
      />

      <UI.FeedWall
        adressat={adressat}
        isRead={conversationRoot.isRead}
        loading={conversationStatus.loading}
      />

      {conversationRoot.participants.length >= 2 && (
        <UI.FeedForm
          loading={conversationStatus.loading}
          disabled={deletionStatus.loading || conversationStatus.loading}
        />
      )}
    </Stack>
  );
};

export default Feed;
