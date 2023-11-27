import { Outlet, useLocation, useParams } from "react-router-dom";

import * as UI from "./components";
import { Stack } from "@mui/material";
import { ContentBox, SectionTitle } from "components/Layouts";

const Messages: React.FC = () => {
  const { search } = useLocation();
  const { conversationId } = useParams();

  const showControl =
    new URLSearchParams(search).get("active-tab") === "control";

  return (
    <ContentBox>
      <SectionTitle title="Messages" />

      <Stack
        className="content__box"
        direction="row"
        height="82vh"
        // overflow="hidden"
        padding={0}
        position="relative"
      >
        {/* <UI.ShowControlButton /> */}

        <UI.ActiveConversations />

        <Outlet />

        {!conversationId && <UI.NoSelectedConversation />}

        {showControl && <UI.ConversationControl />}
      </Stack>
    </ContentBox>
  );
};

export default Messages;
