/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useChatQuery } from "hooks/api/messages";

import { Feed } from "components/Messages/components";

const ChatFeed: React.FC = () => {
  const { conversationId } = useParams();

  const { getConversation, cleanUpConversation } = useChatQuery();

  useEffect(() => {
    if (!conversationId) return;

    getConversation({ conversationId });

    return () => {
      cleanUpConversation();
    };
  }, [conversationId]);

  return <Feed />;
};

export default ChatFeed;
