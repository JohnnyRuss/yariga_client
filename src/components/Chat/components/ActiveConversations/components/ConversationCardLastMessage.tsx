import { Typography } from "@mui/material";

import { MessageT } from "interface/db/chat.types";

type ConversationCardLastMessageT = {
  message: MessageT;
  conversationIsRead: boolean;
  belongsToActiveUser: boolean;
};

const ConversationCardLastMessage: React.FC<ConversationCardLastMessageT> = ({
  message,
  conversationIsRead,
  belongsToActiveUser,
}) => {
  return (
    <Typography
      fontSize={14}
      fontWeight={conversationIsRead ? 400 : 600}
      className="conversation-text last-message"
      color={conversationIsRead ? "app_text.main" : "app_text.dark"}
    >
      <Typography
        component="span"
        textTransform="capitalize"
        fontSize="inherit"
        fontWeight="inherit"
        color="inherit"
      >
        {belongsToActiveUser ? "You" : message.sender.username}
        {": "}
      </Typography>

      <Typography
        component="span"
        fontSize="inherit"
        fontWeight="inherit"
        color="inherit"
      >
        {message.text}
      </Typography>
    </Typography>
  );
};

export default ConversationCardLastMessage;
