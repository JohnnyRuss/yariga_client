import { useAppSelector } from "store/hooks";

import { selectConversations } from "store/selectors/chat.selectors";

import Search from "./components/Search";
import { Stack, Box } from "@mui/material";
import ConversationCard from "./components/ConversationCard";

type ActiveConversationsT = {};

const ActiveConversations: React.FC<ActiveConversationsT> = () => {
  const conversations = useAppSelector(selectConversations);

  return (
    <Stack
      component="aside"
      flex={1}
      flexBasis="350px"
      borderRight="1px solid"
      borderColor="app_text.contrastText"
      p={1}
    >
      <Search />

      <Box className="custom_scrollbar" mt="15px">
        <Stack gap={2} pr={1}>
          {conversations.map((conversation) => (
            <ConversationCard
              key={`conversation-card__${conversation._id}`}
              conversation={conversation}
            />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default ActiveConversations;
