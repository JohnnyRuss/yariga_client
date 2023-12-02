import { useEffect, useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";

import { useChatContext } from "providers/chat/ChatProvider";
import { selectConversationMessages } from "store/selectors/chat.selectors";

import * as UI from "./";
import { Stack, Box } from "@mui/material";
import { Avatar } from "components/Chat/components/common";

import { ConversationParticipantT } from "interface/db/chat.types";

type FeedWallT = {
  isRead: boolean;
  loading: boolean;
  adressat: ConversationParticipantT;
};

const FeedWall: React.FC<FeedWallT> = ({ loading, adressat, isRead }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { groupMessages, authenticatedUserId } = useChatContext();
  const messages = useAppSelector(selectConversationMessages);

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
