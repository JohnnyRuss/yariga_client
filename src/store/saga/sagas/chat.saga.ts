import { takeLatest, takeEvery } from "redux-saga/effects";

import { chatActions } from "store/reducers/chat.reducer";
import * as chatHandlers from "store/saga/handlers/chat.handlers";

export default function* chatSaga() {
  //_________________________________           ALL CONVERSATIONS

  yield takeLatest(chatActions.getConversations, chatHandlers.getConversations);

  //_________________________________           PAGINATE ALL CONVERSATIONS

  yield takeLatest(
    chatActions.getPaginatedConversations,
    chatHandlers.getPaginatedConversations
  );

  //_________________________________           CONVERSATION

  yield takeLatest(chatActions.getConversation, chatHandlers.getConversation);

  //_________________________________           CONVERSATION MESSAGES

  yield takeLatest(
    chatActions.getConversationMessages,
    chatHandlers.getConversationMessages
  );

  //_________________________________           CREATE CONVERSATION AND GET ALL

  yield takeLatest(
    chatActions.createConversationAndGetAll,
    chatHandlers.createConversationAndGetAll
  );

  //_________________________________           SEND MESSAGE

  yield takeEvery(chatActions.sendMessage, chatHandlers.sendMessage);

  //_________________________________           MARK CONVERSATION AS READ

  yield takeLatest(
    chatActions.markConversationAsRead,
    chatHandlers.markConversationAsRead
  );

  //_________________________________           DELETE CONVERSATION

  yield takeLatest(
    chatActions.deleteConversation,
    chatHandlers.deleteConversation
  );
}
