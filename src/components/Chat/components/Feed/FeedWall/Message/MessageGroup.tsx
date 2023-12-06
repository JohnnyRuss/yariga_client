import { memo } from "react";

import "./message.css";
import Message from "./Message";
import { Stack, Box } from "@mui/material";
import { Avatar } from "components/Chat/components/common";

import { MessageT } from "interface/db/chat.types";

type MessageElT = {
  messageGroup: Array<MessageT>;
  authenticatedUserId: string;
};

const MessageGroup: React.FC<MessageElT> = ({
  messageGroup,
  authenticatedUserId,
}) => {
  const groupSender = messageGroup[0].sender;
  const belongToActiveUser = groupSender._id === authenticatedUserId;

  const isMultiMessageGroup = messageGroup.length > 1;

  return (
    <Stack
      gap="10px"
      direction="row"
      maxWidth="75%"
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
        maxWidth="100%"
        width="max-content"
        alignItems={belongToActiveUser ? "flex-end" : "flex-start"}
        className={isMultiMessageGroup ? "group__multi-msg" : ""}
      >
        {messageGroup.map((message) => (
          <Message
            key={message._id}
            message={message}
            belongToActiveUser={belongToActiveUser}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default memo(MessageGroup);
