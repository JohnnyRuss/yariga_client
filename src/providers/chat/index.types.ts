import {
  MessageT,
  ConversationShortT,
  ConversationParticipantT,
} from "interface/db/chat.types";
import { EmojiT } from "interface/components/common.types";

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
  text: string;
  onSendMessage: (e?: React.FormEvent) => void;
  onEnter: (e: React.KeyboardEvent) => void;
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onEmojiSelection: (value: EmojiT) => void;
};

export type { ChartProviderT, ChatContextT };
