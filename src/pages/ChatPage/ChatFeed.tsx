/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Feed } from "components/Chat";
import { useConversationQuery, useChatQuery } from "hooks/api/chat";

const ChatFeed: React.FC = () => {
  const { conversationId } = useParams();

  const { markConversationAsRead } = useChatQuery();
  const { getConversation, cleanUpConversation } = useConversationQuery();

  useEffect(() => {
    if (!conversationId) return;

    getConversation({ conversationId });
    markConversationAsRead({ conversationId, read: "1" });

    return () => {
      cleanUpConversation(conversationId);
    };
  }, [conversationId]);

  return <Feed />;
};

export default ChatFeed;
