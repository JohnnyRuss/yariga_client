import Avatar from "../../common/Avatar";
import { Stack, Typography, Box } from "@mui/material";

import "./message.css";

import { MessageT } from "interface/db/chat.types";

type MessageElT = {
  messageGroup: Array<MessageT>;
  authenticatedUserId: string;
};

const Message: React.FC<MessageElT> = ({
  messageGroup,
  authenticatedUserId,
}) => {
  const groupSender = messageGroup[0].sender;
  const belongToActiveUser = groupSender._id === authenticatedUserId;

  const isMultiMessageGroup = messageGroup.length > 1;

  return (
    <Stack
      direction="row"
      maxWidth="75%"
      gap="10px"
      ml={belongToActiveUser ? "auto" : "0"}
      mr={belongToActiveUser ? "0" : "auto"}
      flexDirection={belongToActiveUser ? "row-reverse" : "initial"}
    >
      {!belongToActiveUser && (
        <Box mt="auto">
          <Avatar src={groupSender.avatar} alt={groupSender.username} />
        </Box>
      )}

      <Stack
        gap="3px"
        alignItems={belongToActiveUser ? "flex-end" : "flex-start"}
        className={isMultiMessageGroup ? "group__multi-msg" : ""}
      >
        {messageGroup.map((message) => (
          <Typography
            key={message._id}
            className={`msg-txt ${
              belongToActiveUser ? "active-user__msg" : ""
            }`}
          >
            {message.text}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default Message;
