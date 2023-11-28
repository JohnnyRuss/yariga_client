import {
  ConversationT,
  ConversationShortT,
  ConversationParticipantT,
} from "interface/db/chat.types";
import { LoadingStatusT } from "interface/store/common.types";

type ChatStateT = {
  conversationsStatus: LoadingStatusT;
  activeConversationStatus: LoadingStatusT;
  conversations: Array<ConversationShortInfoT>;
  activeConversation: ConversationT;
};

type ConversationShortInfoT = ConversationShortT & {
  adressat: ConversationParticipantT | null;
};

export type { ChatStateT, ConversationShortInfoT };
