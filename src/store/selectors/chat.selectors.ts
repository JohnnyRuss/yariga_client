import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

// MEMORISED SELECTORS
const selectedConversationsStatus = ({ chat }: RootStateT) => ({
  error: chat.conversationsStatus.error,
  loading: chat.conversationsStatus.loading,
  message: chat.conversationsStatus.message,
  status: chat.conversationsStatus.status,
});

const selectedConversationStatus = ({ chat }: RootStateT) => ({
  error: chat.activeConversationStatus.error,
  loading: chat.activeConversationStatus.loading,
  message: chat.activeConversationStatus.message,
  status: chat.activeConversationStatus.status,
});

const selectedDeleteConversationStatus = ({ chat }: RootStateT) => ({
  error: chat.deleteConversationStatus.error,
  loading: chat.deleteConversationStatus.loading,
  message: chat.deleteConversationStatus.message,
  status: chat.deleteConversationStatus.status,
  conversationId: chat.deleteConversationStatus.conversationId,
});

const selectedActiveConversation = ({ chat }: RootStateT) => ({
  createdAt: chat.activeConversation.createdAt,
  isReadBy: chat.activeConversation.isReadBy,
  messages: chat.activeConversation.messages,
  participants: chat.activeConversation.participants,
});

const selectedConversationAdressat = ({ chat, user }: RootStateT) =>
  chat.activeConversation.participants.find(
    (participant) => participant._id !== user.user._id
  );

const selectedConversationOrigin = ({ chat }: RootStateT) => ({
  _id: chat.activeConversation._id,
  participants: chat.activeConversation.participants,
  isReadBy: chat.activeConversation.isReadBy,
  updatedAt: chat.activeConversation.updatedAt,
  lastMessage:
    chat.activeConversation.messages[
      chat.activeConversation.messages.length - 1
    ],
});

// SELECTORS
const selectConversationsStatus = createSelector(
  selectedConversationsStatus,
  (status) => status
);

const selectConversationStatus = createSelector(
  selectedConversationStatus,
  (status) => status
);

const selectDeleteConversationStatus = createSelector(
  selectedDeleteConversationStatus,
  (status) => status
);

const selectConversations = ({ chat }: RootStateT) => chat.conversations;

const selectActiveConversation = createSelector(
  selectedActiveConversation,
  (conversation) => conversation
);

const selectConversationAdressat = createSelector(
  selectedConversationAdressat,
  (adressat) => adressat
);

const selectConversationMessages = ({ chat }: RootStateT) =>
  chat.activeConversation.messages;

const selectConversationOrigin = createSelector(
  selectedConversationOrigin,
  (origin) => origin
);

export {
  selectConversationsStatus,
  selectConversationStatus,
  selectDeleteConversationStatus,
  selectConversations,
  selectActiveConversation,
  selectConversationAdressat,
  selectConversationMessages,
  selectConversationOrigin,
};
