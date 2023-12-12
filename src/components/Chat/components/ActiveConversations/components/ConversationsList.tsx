import { useAppSelector } from "store/hooks";
import { selectConversations } from "store/selectors/chat.selectors";

import * as UI from "./";
import { Box, Stack } from "@mui/material";

import { ConversationShortInfoT } from "interface/store/chat.types";
type ConversationsListT = {
  loading: boolean;
};

const ConversationsList: React.FC<ConversationsListT> = ({ loading }) => {
  const conversations = useAppSelector(selectConversations);

  const sortFn = (a: ConversationShortInfoT, b: ConversationShortInfoT) => {
    if (!a.lastMessage && !b.lastMessage) return 0;
    else if (!a.lastMessage) return -1;
    else if (!b.lastMessage) return 1;
    else
      return (
        new Date(b.lastMessage.createdAt).getTime() -
        new Date(a.lastMessage.createdAt).getTime()
      );
  };

  return (
    <Box className="custom_scrollbar" mt="15px">
      {loading ? (
        <UI.ConversationCardSkeleton />
      ) : (
        <Stack gap={2} pr={1}>
          {[...conversations].sort(sortFn).map((conversation) => (
            <UI.ConversationCard
              key={`conversation-card__${conversation._id}`}
              conversation={conversation}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default ConversationsList;
