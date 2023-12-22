import {
  setStatus,
  SetStatusArgsT,
  controlStatus as status,
} from "./helpers/controlStatus";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

import { PATHS } from "config/paths";
import { RouterHistory } from "config/config";

import {
  ChatStateT,
  ConversationShortInfoT,
  MessagesGroupT,
} from "interface/store/chat.types";
import * as ChatApiT from "interface/db/chat.types";

const initialState: ChatStateT = {
  hasMore: false,

  currentPage: 1,

  unreadConversations: [],

  conversationsStatus: status.default(),

  activeConversationStatus: status.default(),

  conversationMessagesStatus: status.default(),

  deleteConversationStatus: { ...status.default(), conversationId: "" },

  conversations: [],

  activeConversation: {
    _id: "",
    createdAt: "",
    isRead: false,
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
      state.unreadConversations = getUnreadConversationIds(
        transformedConversations
      );

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
      {
        payload: { conversation, hasMore },
      }: PayloadAction<{
        hasMore: boolean;
        conversation: ChatApiT.GetConversationResponseT;
      }>
    ) {
      const isRead = checkConversationIsRead(conversation);

      state.activeConversation = {
        ...conversation,
        messages: groupMessages(conversation.messages),
        isRead,
      };

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

      state.hasMore = hasMore;
      state.currentPage = 1;

      state.activeConversationStatus = status.default();

      state.unreadConversations = getUnreadConversationIds(state.conversations);
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
      state.hasMore = initialState.hasMore;
      state.currentPage = initialState.currentPage;
    },

    setConversationStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.activeConversationStatus = setStatus({ stage, message });
    },

    // CONVERSATION MESSAGES
    getConversationMessages: {
      prepare: (payload: ChatApiT.GetConversationMessagesArgsT) => {
        return { payload };
      },

      reducer: (state) => {
        state.conversationMessagesStatus = status.loading();
      },
    },

    setConversationMessages(
      state,
      { payload }: PayloadAction<ChatApiT.GetConversationMessagesResponseT>
    ) {
      state.activeConversation.messages = [
        ...state.activeConversation.messages,
        ...groupMessages(payload.messages),
      ];

      state.hasMore = payload.hasMore;
      state.currentPage = state.currentPage + 1;

      state.conversationMessagesStatus = status.default();
    },

    setConversationMessagesStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.conversationMessagesStatus = setStatus({ stage, message });
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

      state.unreadConversations = getUnreadConversationIds(state.conversations);

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
        conversation: ChatApiT.ConversationCardT;
      }>
    ) {
      const { conversation, activeUserId } = payload;

      if (state.conversations.some((c) => c._id === conversation._id)) return;

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
          lastMessage: conversation.lastMessage,
          createdAt: conversation.createdAt,
        },
        ...state.conversations,
      ];

      state.unreadConversations = getUnreadConversationIds(state.conversations);
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

      if (state.activeConversation._id === conversation._id) {
        const lastGroup = state.activeConversation.messages.find(
          (gr) => gr.divider === false
        );

        const lastGroupLastMessage =
          lastGroup?.messages[lastGroup.messages.length - 1];

        const belongsLastGroup =
          lastGroupLastMessage?.sender?._id === message.sender?._id;

        const isDateMissing = isDateDiff(
          lastGroupLastMessage?.createdAt || "",
          message.createdAt
        );

        if (belongsLastGroup && !isDateMissing) {
          lastGroup?.messages.unshift(message);
        } else if (!belongsLastGroup && !isDateMissing) {
          state.activeConversation.messages.unshift(
            getGroup(message, [message])
          );
        } else if (isDateMissing) {
          state.activeConversation.messages.unshift(
            getDivider(message.createdAt)
          );
          state.activeConversation.messages.unshift(
            getGroup(message, [message])
          );
        }

        state.activeConversation = {
          ...state.activeConversation,
          isReadBy: conversation.isReadBy,
          isRead: checkConversationIsRead({
            ...state.activeConversation,
            isReadBy: conversation.isReadBy,
          }),
        };
      }
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
            ]?.messages[0],
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

      state.unreadConversations = getUnreadConversationIds(state.conversations);
    },

    // UNREAD  CONVERSATIONS
    setUnreadConversationsCount(state, { payload }: PayloadAction<string>) {
      state.unreadConversations = [
        ...Array.from(new Set([...state.unreadConversations, payload])),
      ];
    },
  },
});

export default chatSlice.reducer;
export const chatActions = chatSlice.actions;

// UTILS

const getLastMessageAdressat = (conversation: ChatApiT.ConversationShortT) =>
  conversation.participants.find(
    (user) => user._id !== conversation.lastMessage?.sender?._id || ""
  );

function checkConversationIsRead(conversation: ChatApiT.ConversationShortT) {
  return conversation.isReadBy.includes(
    getLastMessageAdressat(conversation)?._id || ""
  );
}

function getUnreadConversationIds(
  conversations: Array<ConversationShortInfoT>
) {
  const user = RouterHistory.activeUser;

  return conversations
    .filter(
      (conversation) =>
        !conversation.isRead &&
        getLastMessageAdressat(conversation)?._id === user._id
    )
    .map((conversation) => conversation._id);
}

function getDate(dateStr: string) {
  return new Date(dateStr).getTime();
}

function isDateDiff(previousDate: string, currentDate: string) {
  const _20m = 1000 * 60 * 20;

  const previousDateTime = getDate(previousDate);

  const currentDateTime = getDate(currentDate);

  return Math.abs(currentDateTime - previousDateTime) >= _20m;
}

function groupMessages(
  messages: Array<ChatApiT.MessageT>
): Array<MessagesGroupT> {
  const groups: Array<MessagesGroupT> = [];

  let temp: Array<ChatApiT.MessageT> = [];

  const transformAsGroup = (
    message: ChatApiT.MessageT,
    groupedMessages: Array<ChatApiT.MessageT>,
    cleanUpTemp = true
  ) => {
    groups.push(getGroup(message, groupedMessages));
    if (cleanUpTemp) temp = [];
  };

  const transformAsDivider = (message: ChatApiT.MessageT) => {
    groups.push(getDivider(message.createdAt));
    temp = [];
  };

  messages.forEach((message, index, row) => {
    const lastIndex = row.length - 1;
    const notIsFirstInRow = index > 0;

    const senderId = message.sender?._id || "";

    const previousMessageSenderId = notIsFirstInRow
      ? row[index - 1].sender?._id
      : "";

    const isDateMissing =
      notIsFirstInRow &&
      isDateDiff(row[index - 1].createdAt, message.createdAt);

    const messagePlacement = isDateMissing
      ? "DIVIDER"
      : senderId === previousMessageSenderId
      ? "IN_GROUP"
      : "";

    switch (index) {
      case 0:
        temp.push(message);
        if (!row[index + 1]) transformAsGroup(message, temp);
        break;
      case lastIndex:
        if (messagePlacement === "IN_GROUP") {
          temp.push(message);
          transformAsGroup(message, temp);
        } else if (messagePlacement === "DIVIDER") {
          transformAsDivider(row[index - 1]);
          transformAsGroup(message, [message]);
        } else {
          if (temp.length > 0) transformAsGroup(message, temp);
          transformAsGroup(message, [message]);
        }
        break;
      default:
        if (messagePlacement === "IN_GROUP") {
          temp.push(message);
        } else if (messagePlacement === "DIVIDER") {
          if (temp.length > 0) transformAsGroup(message, temp);
          transformAsDivider(row[index - 1]);
          temp.push(message);
        } else {
          transformAsGroup(message, temp);
          temp.push(message);
        }
        break;
    }
  });

  return groups;
}

function getGroup(
  message: ChatApiT.MessageT,
  groupedMessages: Array<ChatApiT.MessageT>
) {
  return {
    divider: false,
    groupId: nanoid(),
    date: message.createdAt,
    messages: groupedMessages,
    groupAuthor: message.sender?._id || "",
  };
}

function getDivider(date: string) {
  return {
    date,
    divider: true,
    messages: [],
    groupAuthor: "",
    groupId: nanoid(),
  };
}
