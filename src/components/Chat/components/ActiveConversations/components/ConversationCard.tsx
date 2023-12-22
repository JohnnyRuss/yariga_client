/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useAppSelector } from "store/hooks";

import { getTimeString } from "utils";
import { DYNAMIC_PATHS } from "config/paths";
import { selectAuthenticatedUser } from "store/selectors/user.selectors";

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

  const user = useAppSelector(selectAuthenticatedUser);

  const showAsUnread =
    !conversationStatus.belongsToActiveUser && !conversationStatus.isRead;

  const onOptions = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  useEffect(() => {
    setConversationStatus((prev) => ({
      ...prev,
      isRead: conversation.isRead,
      belongsToActiveUser: conversation.lastMessage?.sender?._id === user._id,
    }));
  }, [conversation]);

  return (
    <MuiStyled.ConversationCard
      to={DYNAMIC_PATHS.chat_conversation__page(conversation._id)}
      className={({ isActive }) => (isActive ? "active-conversation" : "")}
    >
      <Stack className="conversation-card__stack">
        <Avatar
          src={conversation.adressat?.avatar}
          alt={conversation.adressat?.username}
        />

        <Stack className="conversation-card__stack-details">
          <Typography className="conversation-card__stack-details--username">
            {conversation.adressat?.username || "Unknown User"}
          </Typography>

          <Stack className="conversation-card__stack-details--message">
            {conversation.lastMessage && (
              <ConversationCardLastMessage
                message={conversation.lastMessage}
                showAsUnread={showAsUnread}
                belongsToActiveUser={conversationStatus.belongsToActiveUser}
              />
            )}

            <Badge
              variant="dot"
              sx={{ opacity: showAsUnread ? 1 : 0 }}
              className="conversation-card__stack-details--message__badge"
            />

            <Box
              onClick={onOptions}
              className="conversation-card__stack-details--message__options"
            >
              <ConversationOptions
                showPanelBtn={false}
                conversationId={conversation._id}
                isRead={conversationStatus.isRead}
              />
            </Box>
          </Stack>
        </Stack>

        <Box className="conversation-card__stack-date">
          {getTimeString(conversation.lastMessage?.createdAt || "")}
        </Box>
      </Stack>
    </MuiStyled.ConversationCard>
  );
};

export default ConversationCard;
