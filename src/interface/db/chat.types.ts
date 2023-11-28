type ConversationShortT = {
  _id: string;
  participants: Array<ConversationParticipantT>;
  isReadBy: Array<string>;
  createdAt: string;
  lastMessage: MessageT;
};

type ConversationT = Omit<ConversationShortT, "lastMessage"> & {
  messages: Array<MessageT>;
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

export type {
  MessageT,
  ConversationT,
  ConversationShortT,
  ConversationParticipantT,
  // API
  GetConversationArgsT,
};
