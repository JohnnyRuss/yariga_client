import { takeLatest, takeEvery } from "redux-saga/effects";

import { chatActions } from "store/reducers/chat.reducer";
import * as chatHandlers from "store/saga/handlers/chat.handlers";

export default function* chatSaga() {
  yield takeLatest(chatActions.getConversations, chatHandlers.getConversations);

  yield takeLatest(chatActions.getConversation, chatHandlers.getConversation);

  yield takeLatest(
    chatActions.getConversationMessages,
    chatHandlers.getConversationMessages
  );

  yield takeLatest(
    chatActions.deleteConversation,
    chatHandlers.deleteConversation
  );

  yield takeLatest(
    chatActions.createConversationAndGetAll,
    chatHandlers.createConversationAndGetAll
  );

  yield takeEvery(chatActions.sendMessage, chatHandlers.sendMessage);

  yield takeLatest(
    chatActions.markConversationAsRead,
    chatHandlers.markConversationAsRead
  );
}
