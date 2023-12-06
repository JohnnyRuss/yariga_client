import { useAppSelector } from "store/hooks";
import { useEffect, useRef, memo, useMemo } from "react";

import { useChatContext } from "providers/chat/ChatProvider";
import { selectConversationMessages } from "store/selectors/chat.selectors";

import * as UI from "./";
import { Stack, Box } from "@mui/material";

import { ConversationParticipantT } from "interface/db/chat.types";

type FeedWallT = {
  isRead: boolean;
  loading: boolean;
  adressat: ConversationParticipantT;
};

const FeedWall: React.FC<FeedWallT> = ({ isRead, loading, adressat }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { authenticatedUserId, groupMessages } = useChatContext();
  const messages = useAppSelector(selectConversationMessages);

  const groupedMessages = useMemo(() => {
    return groupMessages(messages);
  }, [messages, groupMessages]);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.scrollIntoView({ block: "end", behavior: "auto" });
  }, [messages]);

  return (
    <Box position="relative" width="100%" height="100%">
      <Box
        p={1}
        width="100%"
        height="100%"
        className="custom_scrollbar"
        sx={{ position: "absolute", inset: 0 }}
      >
        <UI.FeedWallStarter loading={loading} />

        {loading ? (
          <UI.MessageGroupSkeleton />
        ) : (
          <Stack width="100%" gap={2} ref={containerRef}>
            {groupedMessages.map((groupe, index) => (
              <UI.MessageGroup
                messageGroup={groupe}
                key={`message-group__${groupe[0]._id}`}
                authenticatedUserId={authenticatedUserId}
              />
            ))}

            {isRead && (
              <UI.SeenBadge
                avatar={adressat.avatar}
                username={adressat.username}
              />
            )}
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default memo(FeedWall);
