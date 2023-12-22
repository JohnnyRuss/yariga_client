type ConversationShortT = {
  _id: string;
  participants: Array<ConversationParticipantT>;
  isReadBy: Array<string>;
  updatedAt: string;
  createdAt: string;
  lastMessage?: MessageT;
};

type MessageT = {
  _id: string;
  sender: ConversationParticipantT | null;
  text: string;
  links: Array<string>;
  files: Array<string>;
  media: Array<string>;
  createdAt: string;
};

type ConversationCardT = ConversationShortT & {
  createdAt: string;
};

type ConversationParticipantT = {
  _id: string;
  username: string;
  email: string;
  avatar: string;
  role: "AGENT" | "USER";
};

type ConversationAssetsT = {
  media: Array<string>;
  links: Array<string>;
};

// API
type GetConversationArgsT = {
  conversationId: string;
};

type GetConversationResponseT = ConversationShortT & {
  messages: Array<MessageT>;
};

type GetConversationAssetsArgsT = {
  conversationId: string;
};

type GetConversationMessagesArgsT = {
  page: number;
  conversationId: string;
};

type GetConversationMessagesResponseT = {
  messages: Array<MessageT>;
  hasMore: boolean;
};

type DeleteConversationArgsT = {
  conversationId: string;
};

type MarkConversationAsReadArgsT = {
  conversationId: string;
  read: "1" | "0";
};

type MarkConversationAsReadResponseT = {
  conversationId: string;
  isReadBy: Array<string>;
};

type CreateConversationArgsT = {
  adressat: string;
};

type SendMessageArgsT = {
  params: { conversationId: string };
  data: {
    text: string;
    links: Array<string>;
    images: Array<string>;
  };
};

type SendMessageResponseT = {
  conversation: {
    _id: string;
    isReadBy: Array<string>;
    lastMessage: MessageT;
    updatedAt: string;
  };
  message: MessageT;
};

export type {
  MessageT,
  ConversationShortT,
  ConversationAssetsT,
  ConversationParticipantT,
  ConversationCardT,
  // API
  GetConversationArgsT,
  GetConversationMessagesArgsT,
  GetConversationMessagesResponseT,
  GetConversationResponseT,
  DeleteConversationArgsT,
  CreateConversationArgsT,
  SendMessageArgsT,
  SendMessageResponseT,
  MarkConversationAsReadArgsT,
  MarkConversationAsReadResponseT,
  GetConversationAssetsArgsT,
};
