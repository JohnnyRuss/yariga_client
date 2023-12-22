import { Outlet } from "react-router-dom";
import { useChatContext } from "providers/chat/ChatProvider";

import * as UI from "./components";
import { Stack } from "@mui/material";
import * as MuiStyled from "./Chat.styled";
import { ContentBox, SectionTitle } from "components/Layouts";

const Chat: React.FC = () => {
  const { conversationId, showControl } = useChatContext();

  return (
    <ContentBox>
      <SectionTitle title="Messages" />

      <MuiStyled.ChatContainer>
        <Stack className="content__box chat__content-box">
          <UI.ActiveConversations />

          <Outlet />

          {!conversationId && <UI.NoSelectedConversation />}

          {showControl && <UI.ConversationPanel />}
        </Stack>
      </MuiStyled.ChatContainer>
    </ContentBox>
  );
};

export default Chat;
