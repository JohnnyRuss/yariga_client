/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type ConversationT = {
  _id: number;
  adressat: string;
  createdAt: Date;
  lastMessage: string;
  avatar: string;
};

type MessageT = {
  _id: string;
  user: number;
  text: string;
  files: Array<string>;
  media: Array<string>;
};

type MessengerProviderT = {
  children: React.ReactNode;
};

type MessengerContextT = {
  conversations: Array<ConversationT>;
  activeConversation: ConversationT | null;
  messages: Array<MessageT>;
};

const CONVERSATIONS: Array<ConversationT> = [
  {
    _id: 1,
    adressat: "Jane Cooper",
    createdAt: new Date(),
    lastMessage: "Hello, how are yoo ?",
    avatar:
      "https://images.unsplash.com/photo-1701083266435-a56ea052fb60?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 2,
    adressat: "Bob Sinclar",
    createdAt: new Date(),
    lastMessage: "It's done ;)",
    avatar:
      "https://images.unsplash.com/photo-1695640443331-59f155bca4f9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 3,
    adressat: "Kate Mctaylor",
    createdAt: new Date(),
    lastMessage: "I'm waiting for you message",
    avatar:
      "https://images.unsplash.com/photo-1699746277651-3b1438122eaa?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: 4,
    adressat: "Roger Dust",
    createdAt: new Date(),
    lastMessage: "I'm waiting for you message",
    avatar:
      "https://images.unsplash.com/photo-1678649928197-6c340218f48d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    _id: 5,
    adressat: "Kevin Black",
    createdAt: new Date(),
    lastMessage: "I'm waiting for you message",
    avatar:
      "https://images.unsplash.com/photo-1675714203227-2405f8246c31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDd8fHxlbnwwfHx8fHw%3D",
  },
  {
    _id: 6,
    adressat: "Diana White",
    createdAt: new Date(),
    lastMessage: "I'm waiting for you message",
    avatar:
      "https://images.unsplash.com/photo-1677612939554-a9144f91ff6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDIzfHx8ZW58MHx8fHx8",
  },
  {
    _id: 7,
    adressat: "Marshal Mathers",
    createdAt: new Date(),
    lastMessage: "I'm waiting for you message",
    avatar:
      "https://images.unsplash.com/photo-1697666471690-5e9d343c7f7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDExfHx8ZW58MHx8fHx8",
  },
  {
    _id: 8,
    adressat: "Adrian Wolf",
    createdAt: new Date(),
    lastMessage: "I'm waiting for you message",
    avatar:
      "https://images.unsplash.com/photo-1688386007323-a40c059d5855?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDI0fHx8ZW58MHx8fHx8",
  },
  {
    _id: 9,
    adressat: "Tina Blinders",
    createdAt: new Date(),
    lastMessage: "I'm waiting for you message",
    avatar:
      "https://images.unsplash.com/photo-1696451203065-477f3a08e8cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDI4fHx8ZW58MHx8fHx8",
  },
  {
    _id: 10,
    adressat: "Eve Second",
    createdAt: new Date(),
    lastMessage: "I'm waiting for you message",
    avatar:
      "https://images.unsplash.com/photo-1698523648314-3226f03c787e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDI3fHx8ZW58MHx8fHx8",
  },
  {
    _id: 11,
    adressat: "Adam First",
    createdAt: new Date(),
    lastMessage: "I'm waiting for you message",
    avatar:
      "https://images.unsplash.com/photo-1698778755079-a76db5955d2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDQ1fHx8ZW58MHx8fHx8",
  },
  {
    _id: 12,
    adressat: "Lilith Firstborn",
    createdAt: new Date(),
    lastMessage: "I'm waiting for you message",
    avatar:
      "https://images.unsplash.com/photo-1698681375999-8faa3e824cd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDQ0fHx8ZW58MHx8fHx8",
  },
];

const MESSAGES = [
  {
    _id: "msg-1",
    user: 1,
    text: "Hi there",
    files: [],
    media: [],
  },
  {
    _id: "msg-2",
    user: 1,
    text: "How are you",
    files: [],
    media: [],
  },
  {
    _id: "msg-3",
    user: 2,
    text: "Thanks, good",
    files: [],
    media: [],
  },
  {
    _id: "msg-4",
    user: 2,
    text: "and you ?",
    files: [],
    media: [],
  },
  {
    _id: "msg-5",
    user: 2,
    text: "i've heard about your journey in brasil ^^",
    files: [],
    media: [],
  },
  {
    _id: "msg-6",
    user: 1,
    text: "thats was great",
    files: [],
    media: [],
  },
  {
    _id: "msg-7",
    user: 1,
    text: "show you some images",
    files: [],
    media: [],
  },
  {
    _id: "msg-8",
    user: 1,
    text: "if you are interested in of course",
    files: [],
    media: [],
  },
  {
    _id: "msg-9",
    user: 2,
    text: "are you kidding me ? :D",
    files: [],
    media: [],
  },
  {
    _id: "msg-10",
    user: 2,
    text: "send me your photos as soon as it's possible ^^",
    files: [],
    media: [],
  },
];

const MessengerContext = createContext<MessengerContextT>({
  conversations: [],
  activeConversation: null,
  messages: [],
});

const MessengerProvider: React.FC<MessengerProviderT> = ({ children }) => {
  const [conversations, setConversations] = useState(CONVERSATIONS);
  const [messages, setMessages] = useState(MESSAGES);

  const [activeConversation, setActiveConversation] =
    useState<ConversationT | null>(null);

  const { conversationId } = useParams();

  useEffect(() => {
    if (!conversationId) return;

    const conversation = conversations.find(
      (conversation) => conversation._id.toString() === conversationId
    );

    if (!conversation) return;

    setActiveConversation(conversation);
  }, [conversationId]);

  return (
    <MessengerContext.Provider
      value={{ conversations, activeConversation, messages }}
    >
      {children}
    </MessengerContext.Provider>
  );
};

export default MessengerProvider;
export const useMessengerContext = () => useContext(MessengerContext);
