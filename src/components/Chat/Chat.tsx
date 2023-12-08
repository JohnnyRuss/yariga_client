import { Outlet } from "react-router-dom";
import { useChatContext } from "providers/chat/ChatProvider";

import * as UI from "./components";
import { Stack, Box } from "@mui/material";
import { ContentBox, SectionTitle } from "components/Layouts";

const Chat: React.FC = () => {
  const { conversationId, showControl } = useChatContext();

  return (
    <>
      <ContentBox>
        <SectionTitle title="Messages" />

        <Box position="relative" width="100%" height="82vh">
          <Stack
            padding={0}
            width="100%"
            height="100%"
            sx={{ inset: 0, overflowX: "hidden" }}
            direction="row"
            position="absolute"
            className="content__box"
          >
            <UI.ActiveConversations />

            <Outlet />

            {!conversationId && <UI.NoSelectedConversation />}

            {showControl && <UI.ConversationPanel />}
          </Stack>
        </Box>
      </ContentBox>

      <UI.ChatSlider />
    </>
  );
};

export default Chat;
