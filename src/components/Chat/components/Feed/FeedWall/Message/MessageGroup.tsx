import { memo } from "react";

import "./message.css";
import Message from "./Message";
import { Stack, Box } from "@mui/material";
import { Avatar } from "components/Chat/components/common";

import { MessagesGroupT } from "interface/store/chat.types";

type MessageElT = {
  messageGroup: MessagesGroupT;
  authenticatedUserId: string;
};

const MessageGroup: React.FC<MessageElT> = ({
  messageGroup,
  authenticatedUserId,
}) => {
  const groupSender = messageGroup.messages[0].sender;
  const belongToActiveUser = groupSender?._id === authenticatedUserId;

  const isMultiMessageGroup = messageGroup.messages.length > 1;

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
        <Box
          mt="auto"
          minWidth={{ xs: "40px", app_mobile: "50px" }}
          width={{ xs: "40px", app_mobile: "50px" }}
          height={{ xs: "40px", app_mobile: "50px" }}
        >
          <Avatar
            width="100%"
            src={groupSender?.avatar || ""}
            alt={groupSender?.username || "Unknown User"}
          />
        </Box>
      )}

      <Stack
        gap="3px"
        maxWidth="100%"
        width="max-content"
        alignItems={belongToActiveUser ? "flex-end" : "flex-start"}
        className={isMultiMessageGroup ? "group__multi-msg" : ""}
      >
        {[...messageGroup.messages]
          .sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          )
          .map((message) => (
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
