import { useAppSelector } from "store/hooks";

import {
  selectConversations,
  selectConversationsStatus,
} from "store/selectors/chat.selectors";

import * as UI from "./components";
import { Stack, Box } from "@mui/material";

const ActiveConversations: React.FC = () => {
  const status = useAppSelector(selectConversationsStatus);
  const conversations = useAppSelector(selectConversations);

  return (
    <Stack
      p={1}
      flex={1}
      flexBasis="200px"
      component="aside"
      borderRight="1px solid"
      borderColor="app_text.contrastText"
    >
      <UI.Search disabled={status.loading} />

      <Box className="custom_scrollbar" mt="15px">
        {status.loading ? (
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
    </Stack>
  );
};

export default ActiveConversations;
