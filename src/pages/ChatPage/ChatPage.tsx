/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { RouterHistory } from "config/config";
import useChatQuery from "hooks/api/messages/useChatQuery";
import MessengerProvider from "providers/MessengerProvider";

import Messages from "components/Messages/Messages";

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
    <MessengerProvider>
      <Messages />
    </MessengerProvider>
  );
};

export default ChatPage;
