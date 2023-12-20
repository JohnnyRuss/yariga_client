/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, lazy, Suspense } from "react";
import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { useRedirectUnAuthorized } from "hooks/auth";
import useChatQuery from "hooks/api/chat/useChatQuery";
import ChatProvider from "providers/chat/ChatProvider";
import ChatGalleryProvider from "providers/chat/ChatGalleryProvider";

import { Spinner } from "components/Layouts";
import { ChatSlider } from "components/Chat/components";
import AppLayout from "components/AppLayout/AppLayout";
const Chat = lazy(() => import("components/Chat/Chat"));

const ChatPage: React.FC = () => {
  const { loading } = useRedirectUnAuthorized();

  const { cleanUpConversations, getConversations } = useChatQuery();

  useEffect(() => {
    getConversations();

    return () => {
      cleanUpConversations();
    };
  }, []);

  return loading ? (
    <></>
  ) : (
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
          <AppLayout>
            <Suspense fallback={<Spinner />}>
              <Chat />
              <ChatSlider />
            </Suspense>
          </AppLayout>
        </ChatGalleryProvider>
      </ChatProvider>
    </>
  );
};

export default ChatPage;
