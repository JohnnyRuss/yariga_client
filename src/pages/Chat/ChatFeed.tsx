/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

import { useConversationQuery } from "hooks/api/chat";

import { Spinner } from "components/Layouts";
const Feed = lazy(() => import("components/Chat/Feed"));

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

  return (
    <Suspense fallback={<Spinner />}>
      <Feed />
    </Suspense>
  );
};

export default ChatFeed;
