import { nanoid } from "@reduxjs/toolkit";
import Linkify from "react-linkify";
import { Stack, Typography, Box } from "@mui/material";
import { Avatar } from "components/Chat/components/common";
import { LinkPreview } from "components/Layouts";
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
          <Typography
            component="div"
            maxWidth={message.links.length > 0 ? "320px" : "100%"}
            key={message._id}
            className={`msg-txt ${
              belongToActiveUser ? "active-user__msg" : ""
            }`}
          >
            <Linkify
              componentDecorator={(href, txt) => (
                <a
                  href={href}
                  rel="noreferrer"
                  className="underline"
                  key={nanoid()}
                >
                  {href}
                </a>
              )}
            >
              {message.text}

              {message.links[0] && <LinkPreview url={message.links[0]} />}
            </Linkify>
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default Message;
