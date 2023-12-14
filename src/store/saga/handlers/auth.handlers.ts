import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { setError, triggerError } from "./helpers/AppError";

import { authActions } from "store/reducers/auth.reducer";
import { userActions } from "store/reducers/user.reducer";
import * as authAPI from "store/saga/api/auth.api";

import * as AuthT from "interface/db/auth.types";

export function* googleLogin({
  payload,
}: PayloadAction<AuthT.GoogleLoginArgsT>) {
  try {
    const { data }: AxiosResponse<AuthT.LoginResponseT> = yield call(
      authAPI.googleLoginQuery,
      payload
    );

    yield put(userActions.setUser(data.user));

    yield put(
      authActions.setAuthenticatedUser({ accessToken: data.accessToken })
    );
  } catch (error: any) {
    yield setError({
      error,
      location: "googleLogin",
      errorSetter: authActions.setAuthStatus,
    });
  }
}

export function* signIn({ payload }: PayloadAction<AuthT.SignInArgsT>) {
  try {
    const { data }: AxiosResponse<AuthT.LoginResponseT> = yield call(
      authAPI.signInQuery,
      payload
    );

    yield put(userActions.setUser(data.user));

    yield put(
      authActions.setAuthenticatedUser({ accessToken: data.accessToken })
    );
  } catch (error: any) {
    yield setError({
      error,
      location: "signIn",
      errorSetter: authActions.setAuthStatus,
    });
  }
}

export function* signUp({ payload }: PayloadAction<AuthT.SignUpArgsT>) {
  try {
    const { data }: AxiosResponse<AuthT.LoginResponseT> = yield call(
      authAPI.signUpQuery,
      payload
    );

    yield put(userActions.setUser(data.user));

    yield put(
      authActions.setAuthenticatedUser({ accessToken: data.accessToken })
    );
  } catch (error: any) {
    yield setError({
      error,
      location: "signUp",
      errorSetter: authActions.setAuthStatus,
    });
  }
}

export function* logout() {
  try {
    yield call(authAPI.logoutQuery);

    yield put(authActions.cleanUpUser());
    yield put(userActions.cleanUpUser());
  } catch (error: any) {
    yield setError({
      error,
      location: "logout",
      errorSetter: authActions.setAuthStatus,
    });
  }
}

export function* forgotPassword({
  payload,
}: PayloadAction<AuthT.ForgotPasswordArgsT>) {
  try {
    yield call(authAPI.forgotPasswordQuery, payload);
    yield put(authActions.setForgotPassword());
  } catch (error: any) {
    yield setError({
      error,
      location: "forgotPassword",
      errorSetter: authActions.setAuthStatus,
    });
  }
}

export function* confirmEmail({
  payload,
}: PayloadAction<AuthT.ConfirmEmailArgsT>) {
  try {
    yield call(authAPI.confirmEmailQuery, payload);
    yield put(authActions.setConfirmEmail());
  } catch (error: any) {
    yield setError({
      error,
      location: "confirmEmail",
      errorSetter: authActions.setAuthStatus,
    });
  }
}

export function* updatePassword({
  payload,
}: PayloadAction<AuthT.UpdatePasswordArgsT>) {
  try {
    yield call(authAPI.updatePasswordQuery, payload);
    yield put(authActions.setUpdatePassword());
  } catch (error: any) {
    yield setError({
      error,
      location: "updatePassword",
      errorSetter: authActions.setAuthStatus,
    });
  }
}

export function* deleteAccount({
  payload,
}: PayloadAction<AuthT.DeleteAccountArgsT>) {
  try {
    yield call(authAPI.deleteAccountQuery, payload);
    yield put(userActions.cleanUpUser());
    yield put(authActions.setDeletedAccount());
  } catch (error: any) {
    yield setError({
      error,
      location: "deleteAccount",
      errorSetter: authActions.setDeleteAccountStatus,
    });
  }
}
