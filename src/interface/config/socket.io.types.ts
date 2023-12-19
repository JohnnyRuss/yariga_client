import { MessageT, ConversationParticipantT } from "interface/db/chat.types";

type UserConnectionT = {
  userId: string;
  socketId: string;
  username: string;
  email: string;
  avatar: string;
};

type NewMessageT = {
  message: MessageT;
  conversation: {
    _id: string;
    createdAt: string;
    isReadBy: Array<string>;
    lastMessage: MessageT;
    participants: Array<ConversationParticipantT>;
    updatedAt: string;
  };
};

export type { UserConnectionT, NewMessageT };
