/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Feed } from "components/Chat";
import { useConversationQuery } from "hooks/api/chat";

const ChatFeed: React.FC = () => {
  const { conversationId } = useParams();

  const { getConversation, cleanUpConversation } = useConversationQuery();

  useEffect(() => {
    if (!conversationId) return;

    getConversation({ conversationId });

    return () => {
      cleanUpConversation(conversationId);
    };
  }, [conversationId]);

  return <Feed />;
};

export default ChatFeed;
