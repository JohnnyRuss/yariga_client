import {
  MessageT,
  ConversationShortT,
  ConversationAssetsT,
  ConversationParticipantT,
} from "interface/db/chat.types";
import { LoadingStatusT } from "interface/store/common.types";

type ChatStateT = {
  conversationsStatus: LoadingStatusT;
  activeConversationStatus: LoadingStatusT;
  conversationMessagesStatus: LoadingStatusT;
  deleteConversationStatus: LoadingStatusT & { conversationId: string };

  unreadConversations: Array<string>;

  hasMoreConversations: boolean;
  allConversationsCurrentPage: number;
  conversations: Array<ConversationShortInfoT>;

  hasMoreMessages: boolean;
  conversationCurrentPage: number;
  activeConversation: ConversationShortT & {
    isRead: boolean;
    messages: Array<MessagesGroupT>;
  };

  conversationAssets: ConversationAssetsT;
};

type MessagesGroupT = {
  groupId: string;
  groupAuthor: string;
  date: string;
  messages: Array<MessageT>;
  divider: boolean;
};

type ConversationShortInfoT = ConversationShortT & {
  adressat: ConversationParticipantT | null;
  isRead: boolean;
};

export type { ChatStateT, MessagesGroupT, ConversationShortInfoT };
