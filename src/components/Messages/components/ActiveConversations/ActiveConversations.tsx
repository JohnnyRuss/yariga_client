import { useMessengerContext } from "providers/MessengerProvider";

import Search from "./components/Search";
import { Stack, Box } from "@mui/material";
import ConversationCard from "./components/ConversationCard";

type ActiveConversationsT = {};

const ActiveConversations: React.FC<ActiveConversationsT> = () => {
  const { conversations } = useMessengerContext();

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
              card={conversation}
            />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default ActiveConversations;
