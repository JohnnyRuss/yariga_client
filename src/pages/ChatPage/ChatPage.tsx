/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { RouterHistory } from "config/config";

import useChatQuery from "hooks/api/chat/useChatQuery";
import ChatProvider from "providers/chat/ChatProvider";
import ChatGalleryProvider from "providers/chat/ChatGalleryProvider";

import { Chat } from "components/Chat";
import { ChatSlider } from "components/Chat/components";

RouterHistory.redirectUnAuthorized();

const ChatPage: React.FC = () => {
  const { cleanUpConversations, getConversations } = useChatQuery();

  useEffect(() => {
    getConversations();

    return () => {
      cleanUpConversations();
    };
  }, []);

  return (
    <>
      <Helmet
        title="Chat"
        type="website"
        disAllowCrawler={true}
        path={PATHS.chat_page}
        description="Yariga allows people to communicate to each others with integrated chat app, where users can share different kind of information."
      />

      <ChatProvider>
        <ChatGalleryProvider>
          <Chat />
          <ChatSlider />
        </ChatGalleryProvider>
      </ChatProvider>
    </>
  );
};

export default ChatPage;
