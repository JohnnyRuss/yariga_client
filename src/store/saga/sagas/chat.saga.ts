import { takeLatest } from "redux-saga/effects";

import { chatActions } from "store/reducers/chat.reducer";
import * as chatHandlers from "store/saga/handlers/chat.handlers";

export default function* chatSaga() {
  yield takeLatest(chatActions.getConversations, chatHandlers.getConversations);
  yield takeLatest(chatActions.getConversation, chatHandlers.getConversation);
}
