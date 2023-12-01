import { setError } from "./helpers/AppError";
import { call, put, select } from "redux-saga/effects";

import { DYNAMIC_PATHS } from "config/paths";
import { RouterHistory } from "config/config";
import * as chatAPI from "store/saga/api/chat.api";
import { chatActions } from "store/reducers/chat.reducer";

import * as ChatApiT from "interface/db/chat.types";
import { AxiosResponse } from "axios";
import { RootStateT } from "store/store";
import { PayloadAction } from "@reduxjs/toolkit";

export function* getConversations() {
  try {
    const { data }: AxiosResponse<Array<ChatApiT.ConversationShortT>> =
      yield call(chatAPI.getConversationsQuery);

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

export function* getConversation({
  payload,
}: PayloadAction<ChatApiT.GetConversationArgsT>) {
  try {
    const { data }: AxiosResponse<ChatApiT.ConversationT> = yield call(
      chatAPI.getConversationQuery,
      payload
    );

    yield put(chatActions.setConversation(data));
  } catch (error: any) {
    yield setError({
      error,
      location: "getConversation",
      errorSetter: chatActions.setConversationStatus,
    });
  }
}

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

export function* createConversationAndGetAll({
  payload,
}: PayloadAction<ChatApiT.CreateConversationArgsT>) {
  try {
    const { data: newConversation }: AxiosResponse<ChatApiT.ConversationT> =
      yield call(chatAPI.createConversationQuery, payload);

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

export function* sendMessage({
  payload,
}: PayloadAction<ChatApiT.SendMessageArgsT>) {
  try {
    const { data }: AxiosResponse<ChatApiT.SendMessageResponseT> = yield call(
      chatAPI.sendMessageQuery,
      payload
    );

    yield put(chatActions.sendSentMessage(data));
  } catch (error: any) {
    yield setError({
      error,
      location: "sendMessage",
      // errorSetter: chatActions.setDeleteConversationStatus,
    });
  }
}

export function* markConversationAsRead({
  payload,
}: PayloadAction<ChatApiT.MarkConversationAsReadArgsT>) {
  try {
    // const { data }: AxiosResponse<ChatApiT.SendMessageResponseT> = yield call(
    //   chatAPI.sendMessageQuery,
    //   payload
    // );

    const authenticatedUserId: string = yield select(
      ({ user }: RootStateT) => user.user._id
    );

    yield put(
      chatActions.setMarkConversationAsRead({
        authenticatedUserId,
        read: payload.read,
        conversationId: payload.conversationId,
      })
    );
  } catch (error: any) {
    yield setError({
      error,
      location: "markConversationAsRead",
      // errorSetter: chatActions.setDeleteConversationStatus,
    });
  }
}
