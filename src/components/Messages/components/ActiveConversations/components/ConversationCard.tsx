import { NavLink } from "react-router-dom";

import { dynamic_paths } from "config/paths";
import useIsAuthenticatedUser from "hooks/utils/useIsAuthenticatedUser";

import Avatar from "../../common/Avatar";
import { Stack, Typography, Box } from "@mui/material";

import { ConversationShortInfoT } from "interface/store/chat.types";

type ConversationCardT = {
  conversation: ConversationShortInfoT;
};

const ConversationCard: React.FC<ConversationCardT> = ({ conversation }) => {
  const { isAuthenticatedUser } = useIsAuthenticatedUser(
    conversation.lastMessage.sender._id
  );

  return (
    <Box
      component={NavLink}
      to={dynamic_paths.messages_conversation__page(conversation._id)}
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
      className={({ isActive }) => (isActive ? "active-conversation" : "")}
    >
      <Stack direction="row" gap={1}>
        <Avatar
          src={conversation.adressat?.avatar || ""}
          alt={conversation.adressat?.username || ""}
        />

        <Stack mt="4px">
          <Typography fontWeight={600} textTransform="capitalize">
            {conversation.adressat?.username}
          </Typography>

          <Typography
            fontSize={14}
            color="app_text.main"
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
              : `${conversation.lastMessage.sender.username}: `}
            {conversation.lastMessage.text}
          </Typography>
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
