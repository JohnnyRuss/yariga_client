import {
  setStatus,
  SetStatusArgsT,
  controlStatus as status,
} from "./helpers/controlStatus";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PATHS } from "config/paths";
import { RouterHistory } from "config/config";

import * as ChatApiT from "interface/db/chat.types";
import { ChatStateT, ConversationShortInfoT } from "interface/store/chat.types";

const initialState: ChatStateT = {
  conversationsStatus: status.default(),

  activeConversationStatus: status.default(),

  deleteConversationStatus: { ...status.default(), conversationId: "" },

  conversations: [],

  activeConversation: {
    _id: "",
    isRead: false,
    createdAt: "",
    updatedAt: "",
    isReadBy: [],
    messages: [],
    participants: [],
  },

  conversationAssets: {
    links: [],
    media: [],
  },
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    // ALL CONVERSATIONS
    getConversations(state) {
      state.conversationsStatus = status.loading();
    },

    setConversations(
      state,
      {
        payload: { data: conversations, activeUserId },
      }: PayloadAction<{
        data: Array<ChatApiT.ConversationShortT>;
        activeUserId: string;
      }>
    ) {
      const transformedConversations: Array<ConversationShortInfoT> =
        conversations.map((conversation) => ({
          ...conversation,
          isRead: checkConversationIsRead(conversation),
          adressat:
            conversation.participants.find(
              (participant) => participant._id !== activeUserId
            ) || null,
        }));

      state.conversations = transformedConversations;

      state.conversationsStatus = status.default();
    },

    cleanUpConversations(state) {
      state.conversations = initialState.conversations;
    },

    setConversationsStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.conversationsStatus = setStatus({
        stage,
        message: message || "Failed to create property",
      });
    },

    // CONVERSATION
    getConversation: {
      prepare: (payload: ChatApiT.GetConversationArgsT) => {
        return { payload };
      },

      reducer: (state) => {
        state.activeConversationStatus = status.loading();
      },
    },

    setConversation(
      state,
      { payload: conversation }: PayloadAction<ChatApiT.ConversationT>
    ) {
      const isRead = checkConversationIsRead(conversation);

      state.activeConversation = { ...conversation, isRead };

      const index = state.conversations.findIndex(
        (listedConversation) => listedConversation._id === conversation._id
      );

      if (index < 0) return;

      state.conversations[index].isReadBy = conversation.isReadBy;
      state.conversations[index] = {
        ...state.conversations[index],
        isReadBy: conversation.isReadBy,
        isRead,
      };

      state.activeConversationStatus = status.default();
    },

    setConversationAssets(
      state,
      { payload }: PayloadAction<ChatApiT.ConversationAssetsT>
    ) {
      state.conversationAssets = payload;
    },

    cleanUpConversation(state) {
      state.activeConversation = initialState.activeConversation;
      state.conversationAssets = initialState.conversationAssets;
    },

    setConversationStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.activeConversationStatus = setStatus({ stage, message });
    },

    // DELETE CONVERSATION
    deleteConversation(
      state,
      {
        payload: { conversationId },
      }: PayloadAction<ChatApiT.DeleteConversationArgsT>
    ) {
      state.deleteConversationStatus = { ...status.loading(), conversationId };
    },

    setDeletedConversation(
      state,
      {
        payload: { conversationId },
      }: PayloadAction<ChatApiT.DeleteConversationArgsT>
    ) {
      if (
        state.activeConversation &&
        state.activeConversation._id === conversationId
      )
        state.activeConversation = initialState.activeConversation;

      state.conversations = state.conversations.filter(
        (conversation) => conversation._id !== conversationId
      );

      RouterHistory.navigate(PATHS.chat_page);

      state.deleteConversationStatus = {
        ...status.default(),
        conversationId: "",
      };
    },

    setDeleteConversationStatus(state, { payload }: PayloadAction<any>) {},

    // CREATE CONVERSATION AND GET ALL
    createConversationAndGetAll(
      state,
      {
        payload: { load },
      }: PayloadAction<{
        args: ChatApiT.CreateConversationArgsT;
        load: boolean;
      }>
    ) {
      if (load) state.conversationsStatus = status.loading();
    },

    setNewConversationCard(
      state,
      {
        payload,
      }: PayloadAction<{
        activeUserId: string;
        conversation: ChatApiT.ConversationT;
      }>
    ) {
      const { conversation, activeUserId } = payload;

      state.conversations = [
        {
          _id: conversation._id,
          adressat:
            conversation.participants.find(
              (participant) => participant._id !== activeUserId
            ) || null,
          isRead: checkConversationIsRead(conversation),
          isReadBy: conversation.isReadBy,
          participants: conversation.participants,
          updatedAt: conversation.updatedAt,
        },
        ...state.conversations,
      ];
    },

    // SEND MESSAGE
    sendMessage(_, { payload }: PayloadAction<ChatApiT.SendMessageArgsT>) {},

    setSentMessage(
      state,
      {
        payload: { conversation, message },
      }: PayloadAction<ChatApiT.SendMessageResponseT>
    ) {
      const conversationIndex = state.conversations.findIndex(
        (c) => c._id === conversation._id
      );

      if (conversationIndex >= 0)
        state.conversations[conversationIndex] = {
          ...state.conversations[conversationIndex],
          isReadBy: conversation.isReadBy,
          isRead: checkConversationIsRead({
            ...state.conversations[conversationIndex],
            isReadBy: conversation.isReadBy,
          }),
          lastMessage: conversation.lastMessage,
        };

      if (state.activeConversation._id === conversation._id)
        state.activeConversation = {
          ...state.activeConversation,
          isReadBy: conversation.isReadBy,
          isRead: checkConversationIsRead({
            ...state.activeConversation,
            isReadBy: conversation.isReadBy,
          }),
          messages: [...state.activeConversation.messages, message],
        };
    },

    // MARK CONVERSATION AS READ
    markConversationAsRead(
      state,
      { payload }: PayloadAction<ChatApiT.MarkConversationAsReadArgsT>
    ) {},

    setMarkConversationAsRead(
      state,
      {
        payload: { conversationId, isReadBy },
      }: PayloadAction<ChatApiT.MarkConversationAsReadResponseT>
    ) {
      if (state.activeConversation._id === conversationId) {
        state.activeConversation.isReadBy = isReadBy;
        state.activeConversation.isRead = checkConversationIsRead({
          ...state.activeConversation,
          lastMessage:
            state.activeConversation.messages[
              state.activeConversation.messages.length - 1
            ],
          isReadBy,
        });
      }

      const index = state.conversations.findIndex(
        (conversation) => conversation._id === conversationId
      );

      if (index < 0) return;

      state.conversations[index].isReadBy = isReadBy;
      state.conversations[index].isRead = checkConversationIsRead({
        ...state.conversations[index],
        isReadBy,
      });
    },
  },
});

export default chatSlice.reducer;
export const chatActions = chatSlice.actions;

function checkConversationIsRead(conversation: ChatApiT.ConversationShortT) {
  const getLastMessageAdressat = (conversation: ChatApiT.ConversationShortT) =>
    conversation.participants.find(
      (user) => user._id !== conversation.lastMessage?.sender?._id || ""
    );

  const adressat = getLastMessageAdressat(conversation);

  const isRead = conversation.isReadBy.includes(adressat?._id || "");

  return isRead;
}
