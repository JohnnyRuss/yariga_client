import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";
import { useMemo, useEffect, useRef } from "react";

import {
  selectConversationMessages,
  selectConversationOrigin,
} from "store/selectors/chat.selectors";
import { selectAuthenticatedUser } from "store/selectors/user.selectors";

import Avatar from "../../common/Avatar";
import Message from "./Message";
import FeedWallStarter from "./FeedWallStarter";
import MessageGroupSkeleton from "./MessageGroupSkeleton";
import { Stack, Box } from "@mui/material";

import { MessageT } from "interface/db/chat.types";

type FeedWallT = {
  loading: boolean;
};

const FeedWall: React.FC<FeedWallT> = ({ loading }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const messages = useAppSelector(selectConversationMessages);
  const conversationRoot = useAppSelector(selectConversationOrigin);
  const { _id: authenticatedUserId } = useAppSelector(selectAuthenticatedUser);

  const lastMessageSenderId = messages[messages.length - 1]?.sender._id;
  const adressat = conversationRoot.participants.find(
    (user) => user._id !== authenticatedUserId
  );

  const isRead =
    lastMessageSenderId === authenticatedUserId &&
    conversationRoot.isReadBy.includes(adressat?._id || "");

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
      <FeedWallStarter loading={loading} />

      {loading ? (
        <MessageGroupSkeleton />
      ) : (
        <Stack width="100%" gap={2} ref={containerRef}>
          {groupedMessages.map((groupe) => (
            <Message
              key={nanoid()}
              messageGroup={groupe}
              authenticatedUserId={authenticatedUserId}
            />
          ))}

          {isRead && (
            <Box ml="auto" sx={{ transform: "translate(-5px,-10px)" }}>
              <Avatar
                width="16px"
                showBadge={false}
                src={adressat?.avatar || ""}
                alt={adressat?.username || ""}
              />
            </Box>
          )}
        </Stack>
      )}
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
