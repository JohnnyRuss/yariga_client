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
  MessagesGroupT,
  ConversationShortInfoT,
} from "interface/store/chat.types";
import * as ChatApiT from "interface/db/chat.types";

const initialState: ChatStateT = {
  //________     ACTIVE CONVERSATION

  hasMoreMessages: false,
  conversationCurrentPage: 1,

  activeConversationStatus: status.default(),
  conversationMessagesStatus: status.default(),

  activeConversation: {
    _id: "",
    createdAt: "",
    isRead: false,
    updatedAt: "",
    isReadBy: [],
    messages: [],
    participants: [],
    adressat: null,
  },

  conversationAssets: {
    links: [],
    media: [],
  },

  //________     UNREAD CONVERSATIONS COUNT

  unreadConversations: [],

  //________     ALL CONVERSATIONS

  hasMoreConversations: false,
  allConversationsCurrentPage: 1,

  conversationsStatus: status.default(),

  conversations: [],

  //________     DELETE CONVERSATION

  deleteConversationStatus: { ...status.default(), conversationId: "" },
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    //_________________________________           ALL CONVERSATIONS

    getConversations(state) {
      state.conversationsStatus = status.loading();
    },

    setConversations(
      state,
      {
        payload: { conversations, hasMore },
      }: PayloadAction<ChatApiT.GetAllConversationsResponseT>
    ) {
      const transformedConversations: Array<ConversationShortInfoT> =
        transformConversations(conversations);

      state.hasMoreConversations = hasMore;
      state.allConversationsCurrentPage = 1;
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

    //_________________________________           PAGINATE ALL CONVERSATIONS

    getPaginatedConversations: {
      prepare: (payload: ChatApiT.GetAllConversationsArgsT) => {
        return { payload };
      },

      reducer: () => {},
    },

    setPaginatedConversations(
      state,
      {
        payload: { hasMore, conversations },
      }: PayloadAction<ChatApiT.GetAllConversationsResponseT>
    ) {
      state.allConversationsCurrentPage =
        state.allConversationsCurrentPage += 1;
      state.hasMoreConversations = hasMore;

      const transformedConversations: Array<ConversationShortInfoT> =
        transformConversations(conversations);

      state.conversations = [
        ...state.conversations,
        ...transformedConversations,
      ];
    },

    setPaginatedConversationsStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      // state. = setStatus({
      //   stage,
      //   message: message || "Failed to create property",
      // });
    },

    //_________________________________           CONVERSATION

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
      state.hasMoreMessages = hasMore;
      state.conversationCurrentPage = 1;

      const isRead = checkConversationIsRead({
        isReadBy: conversation.isReadBy,
        lastMsgSender: conversation.lastMessage?.sender?._id || "",
      });

      state.activeConversation = {
        ...conversation,
        adressat: getAdressat(conversation.participants),
        messages: groupMessages(conversation.messages),
        isRead,
      };

      const index = state.conversations.findIndex(
        (listedConversation) => listedConversation._id === conversation._id
      );

      if (index < 0) return;

      state.conversations[index] = {
        ...state.conversations[index],
        isReadBy: conversation.isReadBy,
        isRead,
      };

      state.activeConversationStatus = status.default();

      state.unreadConversations = state.unreadConversations.filter(
        (c) => c !== conversation._id
      );
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
      state.hasMoreMessages = initialState.hasMoreMessages;
      state.conversationCurrentPage = initialState.conversationCurrentPage;
    },

    setConversationStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.activeConversationStatus = setStatus({ stage, message });
    },

    //_________________________________           CONVERSATION MESSAGES

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

      state.hasMoreMessages = payload.hasMore;
      state.conversationCurrentPage = state.conversationCurrentPage + 1;

      state.conversationMessagesStatus = status.default();
    },

    setConversationMessagesStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.conversationMessagesStatus = setStatus({ stage, message });
    },

    //_________________________________           CREATE CONVERSATION AND GET ALL

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
      { payload: conversation }: PayloadAction<ChatApiT.ConversationCardT>
    ) {
      if (state.conversations.some((c) => c._id === conversation._id)) return;

      const lastMsgSender = conversation.lastMessage?.sender?._id || "";

      state.conversations = [
        {
          _id: conversation._id,
          adressat: getAdressat(conversation.participants),
          isRead: checkConversationIsRead({
            lastMsgSender,
            isReadBy: conversation.isReadBy,
          }),
          isReadBy: conversation.isReadBy,
          participants: conversation.participants,
          updatedAt: conversation.updatedAt,
          lastMessage: conversation.lastMessage,
          createdAt: conversation.createdAt,
        },
        ...state.conversations,
      ];
    },

    //_________________________________           SEND MESSAGE

    sendMessage(_, { payload }: PayloadAction<ChatApiT.SendMessageArgsT>) {},

    setSentMessage(
      state,
      {
        payload: { conversation, message },
      }: PayloadAction<ChatApiT.SendMessageResponseT>
    ) {
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

        if (belongsLastGroup && !isDateMissing)
          lastGroup?.messages.unshift(message);
        else if (!belongsLastGroup && !isDateMissing)
          state.activeConversation.messages.unshift(
            getGroup(message, [message])
          );
        else if (isDateMissing) {
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
          isRead: false,
        };
      }

      const conversationIndex = state.conversations.findIndex(
        (c) => c._id === conversation._id
      );

      if (conversationIndex < 0) return;

      state.conversations[conversationIndex] = {
        ...state.conversations[conversationIndex],
        isReadBy: conversation.isReadBy,
        lastMessage: conversation.lastMessage,
      };
    },

    //_________________________________           MARK CONVERSATION AS READ/UNREAD

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
          isReadBy,
          lastMsgSender:
            state.activeConversation.lastMessage?.sender?._id || "",
        });
      }

      const index = state.conversations.findIndex(
        (conversation) => conversation._id === conversationId
      );

      if (index < 0) return;

      const isRead = checkConversationIsRead({
        isReadBy,
        lastMsgSender:
          state.conversations[index].lastMessage?.sender?._id || "",
      });

      state.conversations[index].isReadBy = isReadBy;
      state.conversations[index].isRead = isRead;

      if (isRead)
        state.unreadConversations = state.unreadConversations.filter(
          (c) => c !== conversationId
        );
      else
        state.unreadConversations = Array.from(
          new Set([...state.unreadConversations, conversationId])
        );
    },

    setMarkConversationAsUnread(
      state,
      {
        payload: { conversationId, isReadBy },
      }: PayloadAction<{ conversationId: string; isReadBy: Array<string> }>
    ) {
      if (state.activeConversation._id === conversationId) {
        state.activeConversation.isReadBy = isReadBy;
        state.activeConversation.isRead = false;
      }

      const index = state.conversations.findIndex(
        (conversation) => conversation._id === conversationId
      );

      if (index < 0) return;

      state.conversations[index].isReadBy = isReadBy;
    },

    //_________________________________           DELETE CONVERSATION

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

      state.unreadConversations = state.unreadConversations.filter(
        (c) => c !== conversationId
      );

      RouterHistory.navigate(PATHS.chat_page);

      state.deleteConversationStatus = {
        ...status.default(),
        conversationId: "",
      };
    },

    setDeleteConversationStatus(state, { payload }: PayloadAction<any>) {},

    //_________________________________           UNREAD  CONVERSATIONS

    getUnreadConversations(state) {},

    setUnreadConversations(state, { payload }: PayloadAction<Array<string>>) {
      state.unreadConversations = [...Array.from(new Set(payload))];
    },

    setUnreadConversation(state, { payload }: PayloadAction<string>) {
      state.unreadConversations = [
        ...Array.from(new Set([...state.unreadConversations, payload])),
      ];

      if (state.activeConversation._id === payload)
        state.activeConversation.isRead = false;

      const index = state.conversations.findIndex((c) => c._id === payload);

      if (index >= 0) state.conversations[index].isRead = false;
    },

    removeUnreadConversation(state, { payload }: PayloadAction<string>) {
      state.unreadConversations = [
        ...Array.from(
          new Set([...state.unreadConversations.filter((c) => c !== payload)])
        ),
      ];

      if (state.activeConversation._id === payload)
        state.activeConversation.isRead = true;

      const index = state.conversations.findIndex((c) => c._id === payload);

      if (index >= 0) state.conversations[index].isRead = true;
    },

    cleanUpUnreadConversations(state) {
      state.unreadConversations = initialState.unreadConversations;
    },
  },
});

export default chatSlice.reducer;
export const chatActions = chatSlice.actions;

//_________________________________           UTILS

function getAdressat(participants: Array<ChatApiT.ConversationParticipantT>) {
  const user = RouterHistory.activeUser;

  return (
    participants.find((participant) => participant._id !== user._id) || null
  );
}

function checkConversationIsRead(args: {
  lastMsgSender: string;
  isReadBy: Array<string>;
}) {
  const user = RouterHistory.activeUser;

  const lastMessageBelongsToActiveUser = args.lastMsgSender === user._id;

  return (
    lastMessageBelongsToActiveUser ||
    (!lastMessageBelongsToActiveUser && args.isReadBy.includes(user._id))
  );
}

function transformConversations(
  conversations: Array<ChatApiT.ConversationShortT>
) {
  return conversations.map((conversation) => {
    const lastMsgSender = conversation.lastMessage?.sender?._id || "";

    return {
      ...conversation,
      isRead: checkConversationIsRead({
        isReadBy: conversation.isReadBy,
        lastMsgSender,
      }),
      adressat: getAdressat(conversation.participants),
    };
  });
}

//_________________________________           Group Messages

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
