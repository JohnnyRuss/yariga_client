import {
  ConversationT,
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
  activeConversation: ConversationT & { isRead: boolean };
  conversationAssets: ConversationAssetsT;
};

type ConversationShortInfoT = ConversationShortT & {
  adressat: ConversationParticipantT | null;
  isRead: boolean;
};

export type { ChatStateT, ConversationShortInfoT };
