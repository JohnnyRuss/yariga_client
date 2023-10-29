import { takeLatest } from "redux-saga/effects";
import { userActions } from "store/reducers/users.reducer";
import * as userHandlers from "store/saga/handlers/user.handlers";

export default function* userSaga() {
  yield takeLatest(userActions.getUser, userHandlers.getUser);
}
