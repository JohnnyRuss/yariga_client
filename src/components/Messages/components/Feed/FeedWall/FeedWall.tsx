import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";
import { useMemo, useEffect, useRef } from "react";

import { selectAuthenticatedUser } from "store/selectors/user.selectors";
import { selectConversationMessages } from "store/selectors/chat.selectors";

import Message from "./Message";
import FeedWallStarter from "./FeedWallStarter";
import { Stack, Box } from "@mui/material";

import { MessageT } from "interface/db/chat.types";

type FeedWallT = {};

const FeedWall: React.FC<FeedWallT> = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const messages = useAppSelector(selectConversationMessages);
  const { _id: authenticatedUserId } = useAppSelector(selectAuthenticatedUser);

  const groupedMessages = useMemo(() => {
    if (!messages[0]) return [];
    return groupMessages(messages);
  }, [messages]);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.scrollIntoView({ block: "end", behavior: "auto" });
  }, [messages]);

  return (
    <Box p={1} maxHeight="100%" className="custom_scrollbar">
      <FeedWallStarter />

      <Stack width="100%" gap={0.5} ref={containerRef}>
        {groupedMessages.map((groupe, index) => (
          <Message
            key={nanoid()}
            messageGroup={groupe}
            authenticatedUserId={authenticatedUserId}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default FeedWall;

function groupMessages(data: MessageT[]) {
  const groups: Array<Array<MessageT>> = [];

  let temp: Array<MessageT> = [];

  data.forEach((message, index, row) => {
    const senderId = message.sender._id;
    const previousSenderId = index > 0 ? row[index - 1].sender._id : "";

    const isInRow = senderId === previousSenderId;

    const lastIndex = row.length - 1;

    switch (index) {
      case 0:
        temp.push(message);
        break;
      case lastIndex:
        if (isInRow) {
          temp.push(message);
          groups.push(temp);
          temp = [];
        } else {
          groups.push(temp);
          groups.push([message]);
          temp = [];
        }
        break;
      default:
        if (isInRow) temp.push(message);
        else {
          groups.push(temp);
          temp = [message];
        }
        break;
    }
  });

  return groups;
}
