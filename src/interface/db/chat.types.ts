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
  isOnline: boolean;
};

type ConversationAssetsT = {
  media: Array<string>;
  links: Array<string>;
};

//________      API      ________//

//________      SINGLE CONVERSATION

type GetConversationArgsT = {
  conversationId: string;
};

type GetConversationResponseT = ConversationShortT & {
  messages: Array<MessageT>;
};

type GetConversationMessagesArgsT = {
  page: number;
  conversationId: string;
};

type GetConversationMessagesResponseT = {
  messages: Array<MessageT>;
  hasMore: boolean;
};

type GetConversationAssetsArgsT = {
  conversationId: string;
};

//________     SEND/READ MESSAGE

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

type MarkConversationAsReadArgsT = {
  conversationId: string;
  read: "1" | "0";
};

type MarkConversationAsReadResponseT = {
  conversationId: string;
  isReadBy: Array<string>;
};

//________     ALL CONVERSATIONS

type GetAllConversationsArgsT = {
  page: number;
};

type GetAllConversationsResponseT = {
  hasMore: boolean;
  conversations: Array<ConversationShortT>;
};

//________     CREATE/DELETE CONVERSATION

type DeleteConversationArgsT = {
  conversationId: string;
};

type CreateConversationArgsT = {
  adressat: string;
};

export type {
  MessageT,
  ConversationShortT,
  ConversationAssetsT,
  ConversationParticipantT,
  ConversationCardT,
  // API
  //________     SINGLE CONVERSATION
  GetConversationArgsT,
  GetConversationResponseT,
  GetConversationMessagesArgsT,
  GetConversationMessagesResponseT,
  GetConversationAssetsArgsT,
  //________     SEND/READ MESSAGE
  SendMessageArgsT,
  SendMessageResponseT,
  MarkConversationAsReadArgsT,
  MarkConversationAsReadResponseT,
  //________     ALL CONVERSATIONS
  GetAllConversationsArgsT,
  GetAllConversationsResponseT,
  //________     CREATE/DELETE CONVERSATION
  DeleteConversationArgsT,
  CreateConversationArgsT,
};
