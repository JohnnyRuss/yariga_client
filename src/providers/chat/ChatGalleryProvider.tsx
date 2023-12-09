import { useAppSelector } from "store/hooks";
import { createContext, useContext, useState, useCallback } from "react";

import { selectConversationMediaAssets } from "store/selectors/chat.selectors";

type ChatGalleryProviderT = {
  children: React.ReactNode;
};

type ChatGalleryContextT = {
  onOpenConversationGallery: (url: string) => void;
  conversationGalleryInitialIndex: number;
  setConversationGalleryInitialIndex: React.Dispatch<
    React.SetStateAction<number>
  >;
};

const ChatGalleryContext = createContext<ChatGalleryContextT>({
  conversationGalleryInitialIndex: NaN,
  onOpenConversationGallery: () => {},
  setConversationGalleryInitialIndex: () => {},
});

const ChatGalleryProvider: React.FC<ChatGalleryProviderT> = ({ children }) => {
  const [conversationGalleryInitialIndex, setConversationGalleryInitialIndex] =
    useState(NaN);

  const conversationMediaAssets = useAppSelector(selectConversationMediaAssets);

  const onOpenConversationGallery = useCallback(
    (url: string) => {
      const index = conversationMediaAssets.findIndex((media) => media === url);
      if (index >= 0) setConversationGalleryInitialIndex(index);
    },
    [conversationMediaAssets]
  );

  return (
    <ChatGalleryContext.Provider
      value={{
        onOpenConversationGallery,
        conversationGalleryInitialIndex,
        setConversationGalleryInitialIndex,
      }}
    >
      {children}
    </ChatGalleryContext.Provider>
  );
};

export default ChatGalleryProvider;

export const useChatGalleryContext = () => useContext(ChatGalleryContext);
