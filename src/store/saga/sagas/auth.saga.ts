import { takeLatest } from "redux-saga/effects";
import { authActions } from "store/reducers/auth.reducer";
import * as authHandlers from "store/saga/handlers/auth.handlers";

export default function* authSaga() {
  yield takeLatest(authActions.login, authHandlers.loginHandler);
  yield takeLatest(authActions.logout, authHandlers.logoutHandler);
}
