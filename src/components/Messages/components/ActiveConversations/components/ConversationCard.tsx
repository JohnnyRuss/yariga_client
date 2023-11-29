import { NavLink } from "react-router-dom";

import { dynamic_paths } from "config/paths";
import useIsAuthenticatedUser from "hooks/utils/useIsAuthenticatedUser";

import Avatar from "../../common/Avatar";
import { Stack, Typography, Box, Badge } from "@mui/material";

import { ConversationShortInfoT } from "interface/store/chat.types";

type ConversationCardT = {
  conversation: ConversationShortInfoT;
};

const ConversationCard: React.FC<ConversationCardT> = ({ conversation }) => {
  const { isAuthenticatedUser, authenticatedUserId } = useIsAuthenticatedUser(
    conversation.lastMessage?.sender._id || ""
  );

  const lastMessageSenderId = conversation.lastMessage?.sender._id || "";

  const isRead =
    lastMessageSenderId !== authenticatedUserId &&
    conversation.isReadBy.includes(lastMessageSenderId);

  return (
    <Box
      component={NavLink}
      to={dynamic_paths.messages_conversation__page(conversation._id)}
      className={({ isActive }) => (isActive ? "active-conversation" : "")}
      sx={{
        padding: "8px 7px",
        borderRadius: "10px",

        "&.active": {
          backgroundColor: "app_blue.light",
          color: "app_text.light",
        },

        "&.active .MuiBox-root.conversation-date p": {
          color: "app_text.light",
        },

        "&.active .MuiTypography-root.conversation-text": {
          color: "app_text.light",
        },
      }}
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
              <Typography
                fontSize={14}
                fontWeight={isRead ? 400 : 600}
                color={isRead ? "app_text.main" : "app_text.dark"}
                className="conversation-text"
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {isAuthenticatedUser
                  ? "You: "
                  : `${conversation.lastMessage?.sender.username}: `}
                {conversation.lastMessage?.text}
              </Typography>
            )}

            <Badge
              invisible={!isRead}
              variant="dot"
              sx={{
                position: "absolute",
                right: "10px",
                width: "12px",
                height: "12px",
                marginLeft: "auto",
                borderRadius: "100%",
                backgroundColor: "app_blue.light",
              }}
            />
          </Stack>
        </Stack>

        <Box ml="auto" mt="4px" className="conversation-date" minWidth="64px">
          <Typography fontSize={14} color="app_text.main" width="100%">
            {new Intl.DateTimeFormat("en-us", {
              hour: "2-digit",
              minute: "2-digit",
            }).format(new Date(conversation.createdAt))}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ConversationCard;
