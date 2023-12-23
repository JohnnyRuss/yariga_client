import { setError } from "./helpers/AppError";
import { call, put, select, all } from "redux-saga/effects";

import { DYNAMIC_PATHS } from "config/paths";
import { RouterHistory } from "config/config";
import * as chatAPI from "store/saga/api/chat.api";
import { chatActions } from "store/reducers/chat.reducer";

import * as ChatApiT from "interface/db/chat.types";
import { AxiosResponse } from "axios";
import { RootStateT } from "store/store";
import { PayloadAction } from "@reduxjs/toolkit";

//_________________________________           ALL CONVERSATIONS

export function* getConversations() {
  try {
    const { data }: AxiosResponse<ChatApiT.GetAllConversationsResponseT> =
      yield call(chatAPI.getConversationsQuery, { page: 1 });

    const activeUserId: string = yield select(
      ({ user }: RootStateT) => user.user._id
    );

    yield put(chatActions.setConversations({ data, activeUserId }));
  } catch (error: any) {
    yield setError({
      error,
      location: "getConversations",
      errorSetter: chatActions.setConversationsStatus,
    });
  }
}

//_________________________________           PAGINATE ALL CONVERSATIONS

export function* getPaginatedConversations({
  payload,
}: PayloadAction<ChatApiT.GetAllConversationsArgsT>) {
  try {
    const { data }: AxiosResponse<ChatApiT.GetAllConversationsResponseT> =
      yield call(chatAPI.getConversationsQuery, payload);

    const activeUserId: string = yield select(
      ({ user }: RootStateT) => user.user._id
    );

    yield put(chatActions.setPaginatedConversations({ data, activeUserId }));
  } catch (error: any) {
    yield setError({
      error,
      location: "getPaginatedConversations",
      errorSetter: chatActions.setPaginatedConversationsStatus,
    });
  }
}

//_________________________________           CONVERSATION

export function* getConversation({
  payload: { conversationId },
}: PayloadAction<ChatApiT.GetConversationArgsT>) {
  try {
    const [
      { data: conversation },
      { data: conversationAssets },
      { data: messages },
    ]: [
      AxiosResponse<ChatApiT.ConversationShortT>,
      AxiosResponse<ChatApiT.ConversationAssetsT>,
      AxiosResponse<ChatApiT.GetConversationMessagesResponseT>
    ] = yield all([
      call(chatAPI.getConversationQuery, { conversationId }),
      call(chatAPI.getConversationAssetsQuery, { conversationId }),
      call(chatAPI.getConversationMessages, { conversationId, page: 1 }),
    ]);

    yield put(chatActions.setConversationAssets(conversationAssets));
    yield put(
      chatActions.setConversation({
        hasMore: messages.hasMore,
        conversation: { ...conversation, messages: messages.messages },
      })
    );
  } catch (error: any) {
    yield setError({
      error,
      location: "getConversation",
      errorSetter: chatActions.setConversationStatus,
    });
  }
}

//_________________________________           CONVERSATION MESSAGES

export function* getConversationMessages({
  payload,
}: PayloadAction<ChatApiT.GetConversationMessagesArgsT>) {
  try {
    const { data }: AxiosResponse<ChatApiT.GetConversationMessagesResponseT> =
      yield call(chatAPI.getConversationMessages, payload);
    yield put(chatActions.setConversationMessages(data));
  } catch (error: any) {
    yield setError({
      error,
      location: "getConversationMessages",
      errorSetter: chatActions.setConversationMessagesStatus,
    });
  }
}

//_________________________________           CREATE CONVERSATION AND GET ALL

export function* createConversationAndGetAll({
  payload: { args, load },
}: PayloadAction<{ args: ChatApiT.CreateConversationArgsT; load: boolean }>) {
  try {
    const {
      data: newConversation,
    }: AxiosResponse<ChatApiT.GetConversationResponseT> = yield call(
      chatAPI.createConversationQuery,
      args
    );

    if (!load) {
      const activeUserId: string = yield select(
        ({ user }: RootStateT) => user.user._id
      );

      yield put(
        chatActions.setNewConversationCard({
          activeUserId,
          conversation: newConversation,
        })
      );
    }

    RouterHistory.navigate(
      DYNAMIC_PATHS.chat_conversation__page(newConversation._id)
    );
  } catch (error: any) {
    yield setError({
      error,
      location: "createConversationAndGetAll",
      // errorSetter: chatActions.setDeleteConversationStatus,
    });
  }
}

//_________________________________           SEND MESSAGE

export function* sendMessage({
  payload,
}: PayloadAction<ChatApiT.SendMessageArgsT>) {
  try {
    const { data }: AxiosResponse<ChatApiT.SendMessageResponseT> = yield call(
      chatAPI.sendMessageQuery,
      payload
    );

    yield put(chatActions.setSentMessage(data));
  } catch (error: any) {
    yield setError({
      error,
      location: "sendMessage",
      // errorSetter: chatActions.setDeleteConversationStatus,
    });
  }
}

//_________________________________           MARK CONVERSATION AS READ

export function* markConversationAsRead({
  payload,
}: PayloadAction<ChatApiT.MarkConversationAsReadArgsT>) {
  try {
    const { data }: AxiosResponse<ChatApiT.MarkConversationAsReadResponseT> =
      yield call(chatAPI.markConversationAsReadQuery, payload);

    yield put(chatActions.setMarkConversationAsRead(data));
  } catch (error: any) {
    yield setError({
      error,
      location: "markConversationAsRead",
      // errorSetter: chatActions.setDeleteConversationStatus,
    });
  }
}

//_________________________________           DELETE CONVERSATION

export function* deleteConversation({
  payload,
}: PayloadAction<ChatApiT.DeleteConversationArgsT>) {
  try {
    const { data }: AxiosResponse<ChatApiT.DeleteConversationArgsT> =
      yield call(chatAPI.deleteConversationQuery, payload);

    yield put(chatActions.setDeletedConversation(data));
  } catch (error: any) {
    yield setError({
      error,
      location: "deleteConversation",
      errorSetter: chatActions.setDeleteConversationStatus,
    });
  }
}
