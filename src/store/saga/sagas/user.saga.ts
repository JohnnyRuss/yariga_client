import { takeLatest } from "redux-saga/effects";
import { userActions } from "store/reducers/user.reducer";
import * as userHandlers from "store/saga/handlers/user.handlers";

export default function* userSaga() {
  yield takeLatest(userActions.getGuest, userHandlers.getGuest);
  yield takeLatest(userActions.updateUser, userHandlers.updateUser);
}
