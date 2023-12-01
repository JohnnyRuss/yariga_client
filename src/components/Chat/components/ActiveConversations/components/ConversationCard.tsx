/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import { getTimeString } from "utils";
import { DYNAMIC_PATHS } from "config/paths";
import { useChatContext } from "providers/ChatProvider";

import * as MuiStyled from "./styles/ConversationCard.styled";
import { Stack, Typography, Box, Badge } from "@mui/material";
import { Avatar, ConversationOptions } from "components/Chat/components/common";
import ConversationCardLastMessage from "./ConversationCardLastMessage";

import { ConversationShortInfoT } from "interface/store/chat.types";

type ConversationCardT = {
  conversation: ConversationShortInfoT;
};

const ConversationCard: React.FC<ConversationCardT> = ({ conversation }) => {
  const [conversationStatus, setConversationStatus] = useState({
    isRead: false,
    belongsToActiveUser: false,
  });

  const { checkConversationIsRead } = useChatContext();

  useEffect(() => {
    const { belongsToActiveUser, isRead } =
      checkConversationIsRead(conversation);

    const conversationIsRead = belongsToActiveUser || isRead;

    setConversationStatus((prev) => ({
      ...prev,
      isRead: conversationIsRead,
      belongsToActiveUser: belongsToActiveUser,
    }));
  }, [conversation]);

  return (
    <MuiStyled.ConversationCard
      to={DYNAMIC_PATHS.chat_conversation__page(conversation._id)}
      className={({ isActive }) => (isActive ? "active-conversation" : "")}
    >
      <Stack direction="row" gap={1} position="relative">
        <Avatar
          src={conversation.adressat?.avatar || ""}
          alt={conversation.adressat?.username || ""}
        />

        <Stack mt="4px" width="100%">
          <Typography fontWeight={600} textTransform="capitalize">
            {conversation.adressat?.username}
          </Typography>

          <Stack direction="row" alignItems="center" width="100%">
            {conversation.lastMessage && (
              <ConversationCardLastMessage
                message={conversation.lastMessage}
                conversationIsRead={conversationStatus.isRead}
                belongsToActiveUser={conversationStatus.belongsToActiveUser}
              />
            )}

            <Badge
              variant="dot"
              className="badge"
              sx={{ opacity: conversationStatus.isRead ? 0 : 1 }}
            />

            <Box
              className="conversation-options__box"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <ConversationOptions
                showPanelBtn={false}
                conversationId={conversation._id}
                isRead={conversationStatus.isRead}
              />
            </Box>
          </Stack>
        </Stack>

        <Box ml="auto" mt="4px" className="conversation-date" minWidth="64px">
          <Typography fontSize={14} color="app_text.main" width="100%">
            {getTimeString(conversation.updatedAt)}
          </Typography>
        </Box>
      </Stack>
    </MuiStyled.ConversationCard>
  );
};

export default ConversationCard;
