import {
  setStatus,
  SetStatusArgsT,
  controlStatus as status,
} from "./helpers/controlStatus";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { paths } from "config/paths";
import { RouterHistory } from "config/config";

import {
  ConversationT,
  ConversationShortT,
  GetConversationArgsT,
  DeleteConversationArgsT,
  CreateConversationArgsT,
} from "interface/db/chat.types";
import { ChatStateT, ConversationShortInfoT } from "interface/store/chat.types";

const initialState: ChatStateT = {
  conversationsStatus: status.default(),

  activeConversationStatus: status.default(),

  deleteConversationStatus: { ...status.default(), conversationId: "" },

  conversations: [],

  activeConversation: {
    _id: "",
    createdAt: "",
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
        data: Array<ConversationShortT>;
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
      prepare: (payload: GetConversationArgsT) => {
        return { payload };
      },

      reducer: (state) => {
        state.activeConversationStatus = status.loading();
      },
    },

    setConversation(state, { payload }: PayloadAction<ConversationT>) {
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
      { payload: { conversationId } }: PayloadAction<DeleteConversationArgsT>
    ) {
      state.deleteConversationStatus = { ...status.loading(), conversationId };
    },

    setDeletedConversation(
      state,
      { payload: { conversationId } }: PayloadAction<DeleteConversationArgsT>
    ) {
      if (
        state.activeConversation &&
        state.activeConversation._id === conversationId
      )
        state.activeConversation = initialState.activeConversation;

      state.conversations = state.conversations.filter(
        (conversation) => conversation._id !== conversationId
      );

      RouterHistory.navigate(paths.messages_page);

      state.deleteConversationStatus = {
        ...status.default(),
        conversationId: "",
      };
    },

    setDeleteConversationStatus(state, { payload }: PayloadAction<any>) {},

    // CREATE CONVERSATION AND GET ALL
    createConversationAndGetAll(
      state,
      { payload }: PayloadAction<CreateConversationArgsT>
    ) {
      state.conversationsStatus = status.loading();
    },
  },
});

export default chatSlice.reducer;
export const chatActions = chatSlice.actions;
