import {
  ConversationT,
  ConversationShortT,
  ConversationAssetsT,
  ConversationParticipantT,
} from "interface/db/chat.types";
import { LoadingStatusT } from "interface/store/common.types";

type ChatStateT = {
  conversationsStatus: LoadingStatusT;
  activeConversationStatus: LoadingStatusT;
  deleteConversationStatus: LoadingStatusT & { conversationId: string };
  conversations: Array<ConversationShortInfoT>;
  activeConversation: ConversationT;
  conversationAssets: ConversationAssetsT;
};

type ConversationShortInfoT = ConversationShortT & {
  adressat: ConversationParticipantT | null;
};

export type { ChatStateT, ConversationShortInfoT };