import { takeLatest } from "redux-saga/effects";
import { authActions } from "store/reducers/auth.reducer";
import * as authHandlers from "store/saga/handlers/auth.handlers";

export default function* authSaga() {
  yield takeLatest(authActions.googleLogin, authHandlers.googleLogin);
  yield takeLatest(authActions.signIn, authHandlers.signIn);
  yield takeLatest(authActions.signUp, authHandlers.signUp);
  yield takeLatest(authActions.logout, authHandlers.logout);
  yield takeLatest(authActions.forgotPassword, authHandlers.forgotPassword);
  yield takeLatest(authActions.confirmEmail, authHandlers.confirmEmail);
  yield takeLatest(authActions.updatePassword, authHandlers.updatePassword);
  yield takeLatest(authActions.deleteAccount, authHandlers.deleteAccount);
}
