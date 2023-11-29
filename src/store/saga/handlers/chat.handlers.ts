import { setError } from "./helpers/AppError";
import { call, put, select } from "redux-saga/effects";

import { dynamic_paths } from "config/paths";
import { RouterHistory } from "config/config";
import * as chatAPI from "store/saga/api/chat.api";
import { chatActions } from "store/reducers/chat.reducer";

import {
  ConversationT,
  ConversationShortT,
  GetConversationArgsT,
  DeleteConversationArgsT,
  CreateConversationArgsT,
} from "interface/db/chat.types";
import { AxiosResponse } from "axios";
import { RootStateT } from "store/store";
import { PayloadAction } from "@reduxjs/toolkit";

export function* getConversations() {
  try {
    const { data }: AxiosResponse<Array<ConversationShortT>> = yield call(
      chatAPI.getConversationsQuery
    );

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
}: PayloadAction<GetConversationArgsT>) {
  try {
    const { data }: AxiosResponse<ConversationT> = yield call(
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
}: PayloadAction<DeleteConversationArgsT>) {
  try {
    const { data }: AxiosResponse<DeleteConversationArgsT> = yield call(
      chatAPI.deleteConversationQuery,
      payload
    );

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
}: PayloadAction<CreateConversationArgsT>) {
  try {
    const { data: newConversation }: AxiosResponse<ConversationT> = yield call(
      chatAPI.createConversationQuery,
      payload
    );

    RouterHistory.navigate(
      dynamic_paths.messages_conversation__page(newConversation._id)
    );
  } catch (error: any) {
    yield setError({
      error,
      location: "createConversationAndGetAll",
      // errorSetter: chatActions.setDeleteConversationStatus,
    });
  }
}
