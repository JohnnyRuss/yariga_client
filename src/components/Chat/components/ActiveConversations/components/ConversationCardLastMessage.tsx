import { matchEmoticons } from "utils";

import { Typography } from "@mui/material";
import { LineClamp } from "components/Layouts";

import { MessageT } from "interface/db/chat.types";

type ConversationCardLastMessageT = {
  message: MessageT;
  showAsUnread: boolean;
  belongsToActiveUser: boolean;
};

const ConversationCardLastMessage: React.FC<ConversationCardLastMessageT> = ({
  message,
  showAsUnread,
  belongsToActiveUser,
}) => {
  const lastMessageText = message.text
    ? message.text
    : message.media?.[0]
    ? belongsToActiveUser
      ? "Send images"
      : "Send you images"
    : "";

  return (
    <Typography
      fontWeight={!showAsUnread ? 400 : 600}
      color={!showAsUnread ? "app_text.main" : "app_text.dark"}
      className="conversation-text conversation-card__last-message"
    >
      {belongsToActiveUser && (
        <Typography
          component="span"
          className="conversation-card__last-message--sender"
        >
          You:&nbsp;
        </Typography>
      )}

      <LineClamp
        clamp={1}
        sx={{ fontSize: "inherit", fontWeight: "inherit", color: "inherit" }}
      >
        {matchEmoticons(lastMessageText)}
      </LineClamp>
    </Typography>
  );
};

export default ConversationCardLastMessage;
