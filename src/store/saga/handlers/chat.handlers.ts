import { setError } from "./helpers/AppError";
import { call, put, select } from "redux-saga/effects";

import { chatActions } from "store/reducers/chat.reducer";
import * as chatAPI from "store/saga/api/chat.api";

import {
  ConversationT,
  ConversationShortT,
  GetConversationArgsT,
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
