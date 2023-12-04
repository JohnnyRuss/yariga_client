import {
  MessageT,
  ConversationShortT,
  ConversationParticipantT,
} from "interface/db/chat.types";

type ChartProviderT = {
  children: React.ReactNode;
};

type ChatContextT = {
  conversationId: string;
  showControl: boolean;
  authenticatedUserId: string;
  checkConversationIsRead: (conversation: ConversationShortT) => {
    isRead: boolean;
    belongsToActiveUser: boolean;
  };
  getLastMessageAdressat: (
    participants: Array<ConversationParticipantT>,
    lastMessageSenderId: string
  ) => ConversationParticipantT;
  groupMessages: (data: Array<MessageT>) => Array<Array<MessageT>>;
};

export type { ChartProviderT, ChatContextT };
