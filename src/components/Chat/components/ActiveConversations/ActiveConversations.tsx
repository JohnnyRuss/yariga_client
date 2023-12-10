import { memo } from "react";
import { useAppSelector } from "store/hooks";

import {
  selectConversations,
  selectConversationsStatus,
} from "store/selectors/chat.selectors";
import { useSearchParams } from "hooks/utils";

import * as UI from "./components";
import { Stack, Box } from "@mui/material";

const ActiveConversations: React.FC = () => {
  const status = useAppSelector(selectConversationsStatus);
  const conversations = useAppSelector(selectConversations);

  const { getParamValue } = useSearchParams();
  const isOnFeed = getParamValue("feed") === "1";

  return (
    <Stack
      p={1}
      flex={1}
      flexBasis={{ xs: "100%", app_desktop: "300px" }}
      maxWidth={{ xs: "100%", app_desktop: "350px" }}
      component="aside"
      borderRight="1px solid"
      borderColor="app_text.contrastText"
      display={{ xs: isOnFeed ? "none" : "flex", app_desktop: "flex" }}
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

export default memo(ActiveConversations);