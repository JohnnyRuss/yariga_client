import { useEffect, useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";

import {
  selectConversationMessages,
  selectConversationOrigin,
} from "store/selectors/chat.selectors";
import { useChatContext } from "providers/ChatProvider";

import * as UI from "./";
import { Stack, Box } from "@mui/material";
import { Avatar } from "components/Chat/components/common";

type FeedWallT = {
  loading: boolean;
};

const FeedWall: React.FC<FeedWallT> = ({ loading }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const messages = useAppSelector(selectConversationMessages);
  const conversationRoot = useAppSelector(selectConversationOrigin);

  const {
    getAdressat,
    groupMessages,
    authenticatedUserId,
    checkConversationIsRead,
  } = useChatContext();

  const { isRead } = checkConversationIsRead(conversationRoot);
  const adressat = getAdressat(conversationRoot.participants);

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
            {groupMessages(messages).map((groupe) => (
              <UI.Message
                key={nanoid()}
                messageGroup={groupe}
                authenticatedUserId={authenticatedUserId}
              />
            ))}

            {isRead && (
              <Box ml="auto" sx={{ transform: "translate(-5px,-10px)" }}>
                <Avatar
                  width="16px"
                  showBadge={false}
                  src={adressat.avatar}
                  alt={adressat.username}
                />
              </Box>
            )}
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default FeedWall;
