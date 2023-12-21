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
      fontSize={14}
      fontWeight={!showAsUnread ? 400 : 600}
      className="conversation-text last-message"
      color={!showAsUnread ? "app_text.main" : "app_text.dark"}
    >
      {belongsToActiveUser && (
        <Typography
          component="span"
          textTransform="capitalize"
          fontSize="inherit"
          fontWeight="inherit"
          color="inherit"
        >
          You:&nbsp;
          {/* {belongsToActiveUser
          ? "You"
          : message.sender?.username || "Unknown User"}
        :&nbsp; */}
        </Typography>
      )}

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
