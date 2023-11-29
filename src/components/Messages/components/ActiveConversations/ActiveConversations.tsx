import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";

import {
  selectConversations,
  selectConversationsStatus,
} from "store/selectors/chat.selectors";

import Search from "./components/Search";
import { Stack, Box } from "@mui/material";
import ConversationCard from "./components/ConversationCard";
import ConversationCardSkeleton from "./components/ConversationCardSkeleton";

type ActiveConversationsT = {};

const ActiveConversations: React.FC<ActiveConversationsT> = () => {
  const status = useAppSelector(selectConversationsStatus);

  const conversations = useAppSelector(selectConversations);

  return (
    <Stack
      p={1}
      flex={1}
      flexBasis="350px"
      component="aside"
      borderRight="1px solid"
      borderColor="app_text.contrastText"
    >
      <Search disabled={status.loading} />

      <Box className="custom_scrollbar" mt="15px">
        {status.loading ? (
          <Stack gap={2} pr={1}>
            {Array.from(new Array(8)).map((item) => (
              <ConversationCardSkeleton key={nanoid()} />
            ))}
          </Stack>
        ) : (
          <Stack gap={2} pr={1}>
            {conversations.map((conversation) => (
              <ConversationCard
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
