type ConversationShortT = {
  _id: string;
  participants: Array<ConversationParticipantT>;
  isReadBy: Array<string>;
  updatedAt: string;
  lastMessage?: MessageT;
};

type ConversationT = Omit<ConversationShortT, "lastMessage"> & {
  messages: Array<MessageT>;
  createdAt: string;
};

type ConversationParticipantT = {
  _id: string;
  username: string;
  email: string;
  avatar: string;
};

type MessageT = {
  _id: string;
  sender: ConversationParticipantT;
  text: string;
  links: Array<string>;
  files: Array<string>;
  media: Array<string>;
  createdAt: string;
};

// API
type GetConversationArgsT = {
  conversationId: string;
};

type DeleteConversationArgsT = {
  conversationId: string;
};

type CreateConversationArgsT = {
  adressat: string;
};

type SendMessageArgsT = {
  params: { conversationId: string };
  data: {
    text: string;
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
  ConversationT,
  ConversationShortT,
  ConversationParticipantT,
  // API
  GetConversationArgsT,
  DeleteConversationArgsT,
  CreateConversationArgsT,
  SendMessageArgsT,
  SendMessageResponseT,
};
