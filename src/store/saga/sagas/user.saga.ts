import { takeLatest } from "redux-saga/effects";
import { userActions } from "store/reducers/user.reducer";
import * as userHandlers from "store/saga/handlers/user.handlers";

export default function* userSaga() {
  yield takeLatest(userActions.getUser, userHandlers.getUser);
  yield takeLatest(userActions.updateUser, userHandlers.updateUser);
}
