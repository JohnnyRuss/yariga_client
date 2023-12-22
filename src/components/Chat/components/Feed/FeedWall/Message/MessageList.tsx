import { useAppSelector } from "store/hooks";

import { getTimeString } from "utils";
import { useChatContext } from "providers/chat/ChatProvider";
import { selectConversationMessages } from "store/selectors/chat.selectors";

import MessageGroup from "./MessageGroup";
import { Divider } from "@mui/material";

const MessageList: React.FC = () => {
  const { authenticatedUserId } = useChatContext();
  const messages = useAppSelector(selectConversationMessages);

  return (
    <>
      {[...messages].map((group) =>
        group.divider ? (
          <Divider key={group.groupId} className="divider">
            {getTimeString(group.date)}
          </Divider>
        ) : (
          <MessageGroup
            key={group.groupId}
            messageGroup={group}
            authenticatedUserId={authenticatedUserId}
          />
        )
      )}
    </>
  );
};

export default MessageList;
