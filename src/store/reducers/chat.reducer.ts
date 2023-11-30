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
    createdAt: "",
    updatedAt: "",
    isReadBy: [],
    messages: [],
    participants: [],
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
        payload,
      }: PayloadAction<{
        data: Array<ChatApiT.ConversationShortT>;
        activeUserId: string;
      }>
    ) {
      const transformedConversations: Array<ConversationShortInfoT> =
        payload.data.map((conversation) => ({
          ...conversation,
          adressat:
            conversation.participants.find(
              (participant) => participant._id !== payload.activeUserId
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

    setConversation(state, { payload }: PayloadAction<ChatApiT.ConversationT>) {
      state.activeConversation = payload;
      state.activeConversationStatus = status.default();
    },

    cleanUpConversation(state) {
      state.activeConversation = initialState.activeConversation;
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
      { payload }: PayloadAction<ChatApiT.CreateConversationArgsT>
    ) {
      state.conversationsStatus = status.loading();
    },

    sendMessage(_, { payload }: PayloadAction<ChatApiT.SendMessageArgsT>) {},

    sendSentMessage(
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
          lastMessage: conversation.lastMessage,
        };

      if (state.activeConversation._id === conversation._id)
        state.activeConversation = {
          ...state.activeConversation,
          isReadBy: conversation.isReadBy,
          messages: [...state.activeConversation.messages, message],
        };
    },
  },
});

export default chatSlice.reducer;
export const chatActions = chatSlice.actions;
