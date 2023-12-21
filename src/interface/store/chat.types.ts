import {
  MessageT,
  ConversationShortT,
  ConversationAssetsT,
  ConversationParticipantT,
} from "interface/db/chat.types";
import { LoadingStatusT } from "interface/store/common.types";

type ChatStateT = {
  unreadConversations: Array<string>;
  conversationsStatus: LoadingStatusT;
  activeConversationStatus: LoadingStatusT;
  deleteConversationStatus: LoadingStatusT & { conversationId: string };
  conversations: Array<ConversationShortInfoT>;
  activeConversation: ConversationShortT & {
    isRead: boolean;
    messages: Array<MessagesGroupT>;
  };
  conversationAssets: ConversationAssetsT;
  hasMore: boolean;
  currentPage: number;
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
