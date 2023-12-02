/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { RouterHistory } from "config/config";
import useChatQuery from "hooks/api/chat/useChatQuery";
import ChatProvider from "providers/chat/ChatProvider";

import { Chat } from "components/Chat";

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
    <ChatProvider>
      <Chat />
    </ChatProvider>
  );
};

export default ChatPage;
