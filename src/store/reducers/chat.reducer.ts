import {
  setStatus,
  SetStatusArgsT,
  controlStatus as status,
} from "./helpers/controlStatus";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  ConversationShortT,
  ConversationT,
  GetConversationArgsT,
} from "interface/db/chat.types";
import { ChatStateT, ConversationShortInfoT } from "interface/store/chat.types";

const initialState: ChatStateT = {
  conversationsStatus: status.default(),

  activeConversationStatus: status.default(),

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
  },
});

export default chatSlice.reducer;
export const chatActions = chatSlice.actions;
