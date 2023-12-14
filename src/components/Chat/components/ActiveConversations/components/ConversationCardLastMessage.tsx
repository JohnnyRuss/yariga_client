import { matchEmoticons } from "utils";

import { Typography } from "@mui/material";
import { LineClamp } from "components/Layouts";

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
  const lastMessageText = message.text
    ? message.text
    : message.media[0]
    ? belongsToActiveUser
      ? "Send images"
      : "Send you images"
    : "";

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
        {belongsToActiveUser
          ? "You"
          : message.sender?.username || "Unknown User"}
        {": "}
      </Typography>

      <LineClamp
        clamp={1}
        sx={{
          fontSize: "inherit",
          fontWeight: "inherit",
          color: "inherit",
        }}
      >
        {matchEmoticons(lastMessageText)}
      </LineClamp>
    </Typography>
  );
};

export default ConversationCardLastMessage;
