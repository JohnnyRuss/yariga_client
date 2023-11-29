/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "store/hooks";

import { useChatQuery } from "hooks/api/messages";
import { selectConversationMessages } from "store/selectors/chat.selectors";

import { Feed } from "components/Messages/components";

const ChatFeed: React.FC = () => {
  const { conversationId } = useParams();

  const { getConversation, cleanUpConversation, deleteConversation } =
    useChatQuery();

  const messages = useAppSelector(selectConversationMessages);

  useEffect(() => {
    if (!conversationId) return;

    getConversation({ conversationId });

    return () => {
      if (!messages[0]) deleteConversation({ conversationId });
      cleanUpConversation();
    };
  }, [conversationId]);

  return <Feed />;
};

export default ChatFeed;
