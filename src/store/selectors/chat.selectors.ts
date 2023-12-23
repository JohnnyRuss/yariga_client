import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

//____________________________     MEMORISED SELECTORS     ____________________________ //

//____________________________     STATUS

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

const selectedConversationMessagesStatus = ({ chat }: RootStateT) => ({
  error: chat.conversationMessagesStatus.error,
  loading: chat.conversationMessagesStatus.loading,
  message: chat.conversationMessagesStatus.message,
  status: chat.conversationMessagesStatus.status,
});

const selectedDeleteConversationStatus = ({ chat }: RootStateT) => ({
  error: chat.deleteConversationStatus.error,
  loading: chat.deleteConversationStatus.loading,
  message: chat.deleteConversationStatus.message,
  status: chat.deleteConversationStatus.status,
  conversationId: chat.deleteConversationStatus.conversationId,
});

//____________________________     PAGINATION

const selectedConversationPagination = ({ chat }: RootStateT) => ({
  hasMore: chat.hasMoreMessages,
  currentPage: chat.conversationCurrentPage,
});

const selectedAllConversationsPagination = ({ chat }: RootStateT) => ({
  hasMore: chat.hasMoreConversations,
  currentPage: chat.allConversationsCurrentPage,
});

//____________________________     ACTIVE CONVERSATION

const selectedActiveConversation = ({ chat }: RootStateT) => ({
  createdAt: chat.activeConversation.createdAt,
  isReadBy: chat.activeConversation.isReadBy,
  isRead: chat.activeConversation.isRead,
  messages: chat.activeConversation.messages,
  participants: chat.activeConversation.participants,
});

const selectedConversationOrigin = ({ chat }: RootStateT) => {
  const lastGroupIndex = chat.activeConversation.messages.length - 1;
  const lastMessageIndex =
    chat.activeConversation.messages[lastGroupIndex]?.messages.length - 1;

  return {
    _id: chat.activeConversation._id,
    participants: chat.activeConversation.participants,
    isReadBy: chat.activeConversation.isReadBy,
    isRead: chat.activeConversation.isRead,
    updatedAt: chat.activeConversation.updatedAt,
    lastMessage:
      chat.activeConversation.messages[lastGroupIndex]?.messages[
        lastMessageIndex
      ],
  };
};

//____________________________     UTILS

const selectedConversationAdressat = ({ chat, user }: RootStateT) =>
  chat.activeConversation.participants.find(
    (participant) => participant._id !== user.user._id
  );

//____________________________     SELECTORS     ____________________________ //

//____________________________     STATUS

const selectConversationsStatus = createSelector(
  selectedConversationsStatus,
  (status) => status
);

const selectConversationStatus = createSelector(
  selectedConversationStatus,
  (status) => status
);

const selectConversationMessagesStatus = createSelector(
  selectedConversationMessagesStatus,
  (status) => status
);

const selectDeleteConversationStatus = createSelector(
  selectedDeleteConversationStatus,
  (status) => status
);

//____________________________     PAGINATION

const selectConversationPagination = createSelector(
  selectedConversationPagination,
  (pagination) => pagination
);

const selectAllConversationsPagination = createSelector(
  selectedAllConversationsPagination,
  (pagination) => pagination
);

//____________________________     ACTIVE CONVERSATION

const selectConversationOrigin = createSelector(
  selectedConversationOrigin,
  (origin) => origin
);

const selectActiveConversation = createSelector(
  selectedActiveConversation,
  (conversation) => conversation
);

const selectConversationMessages = ({ chat }: RootStateT) =>
  chat.activeConversation.messages;

const selectConversationUrlAssets = ({ chat }: RootStateT) =>
  chat.conversationAssets.links;

const selectConversationMediaAssets = ({ chat }: RootStateT) =>
  chat.conversationAssets.media;

//____________________________     ALL CONVERSATIONS

const selectConversations = ({ chat }: RootStateT) => chat.conversations;

//____________________________     UTILS

const selectUnreadConversationsCount = ({ chat }: RootStateT) =>
  chat.unreadConversations.length;

const selectConversationAdressat = createSelector(
  selectedConversationAdressat,
  (adressat) => adressat
);

export {
  //____________________________     STATUS
  selectConversationsStatus,
  selectConversationStatus,
  selectConversationMessagesStatus,
  selectDeleteConversationStatus,
  //____________________________     PAGINATION
  selectConversationPagination,
  selectAllConversationsPagination,
  //____________________________     ACTIVE CONVERSATION
  selectConversationOrigin,
  selectActiveConversation,
  selectConversationMessages,
  selectConversationUrlAssets,
  selectConversationMediaAssets,
  //____________________________     ALL CONVERSATIONS
  selectConversations,
  //____________________________     UTILS
  selectConversationAdressat,
  selectUnreadConversationsCount,
};
