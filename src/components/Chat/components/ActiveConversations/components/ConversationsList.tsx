import { useAppSelector } from "store/hooks";
import { selectConversations } from "store/selectors/chat.selectors";

import * as UI from "./";
import { Box, Stack } from "@mui/material";

type ConversationsListT = {
  loading: boolean;
};

const ConversationsList: React.FC<ConversationsListT> = ({ loading }) => {
  const conversations = useAppSelector(selectConversations);

  return (
    <Box className="custom_scrollbar" mt="15px">
      {loading ? (
        <UI.ConversationCardSkeleton />
      ) : (
        <Stack gap={2} pr={1}>
          {conversations.map((conversation) => (
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
