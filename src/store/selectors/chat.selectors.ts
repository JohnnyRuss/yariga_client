import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

// MEMORISED SELECTORS
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

// SELECTORS
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

export {
  selectConversations,
  selectActiveConversation,
  selectConversationAdressat,
  selectConversationMessages,
};
