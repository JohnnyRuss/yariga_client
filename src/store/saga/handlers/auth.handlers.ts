import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { authActions } from "store/reducers/auth.reducer";
import { userActions } from "store/reducers/user.reducer";
import * as authAPI from "store/saga/api/auth.api";

import {
  GoogleLoginArgsT,
  SignInArgsT,
  SignUpArgsT,
  ForgotPasswordArgsT,
  ConfirmEmailArgsT,
  UpdatePasswordArgsT,
} from "interface/store/auth.types";
import { LoginResponseT } from "interface/db/user.types";

export function* googleLogin({ payload }: PayloadAction<GoogleLoginArgsT>) {
  try {
    const { data }: AxiosResponse<LoginResponseT> = yield call(
      authAPI.googleLoginQuery,
      payload
    );

    yield put(userActions.setUser(data.user));

    yield put(
      authActions.setAuthenticatedUser({ accessToken: data.accessToken })
    );
  } catch (error) {
    console.log(error);
  }
}

export function* signIn({ payload }: PayloadAction<SignInArgsT>) {
  try {
    const { data }: AxiosResponse<LoginResponseT> = yield call(
      authAPI.signInQuery,
      payload
    );

    yield put(userActions.setUser(data.user));

    yield put(
      authActions.setAuthenticatedUser({ accessToken: data.accessToken })
    );
  } catch (error) {
    console.log(error);
  }
}

export function* signUp({ payload }: PayloadAction<SignUpArgsT>) {
  try {
    const { data }: AxiosResponse<LoginResponseT> = yield call(
      authAPI.signUpQuery,
      payload
    );

    yield put(userActions.setUser(data.user));

    yield put(
      authActions.setAuthenticatedUser({ accessToken: data.accessToken })
    );
  } catch (error) {
    console.log(error);
  }
}

export function* logout() {
  try {
    yield call(authAPI.logoutQuery);

    yield put(authActions.cleanUpUser());
    yield put(userActions.cleanUpUser());
  } catch (error) {
    console.log(error);
  }
}

export function* forgotPassword({
  payload,
}: PayloadAction<ForgotPasswordArgsT>) {
  try {
    yield call(authAPI.forgotPasswordQuery, payload);
    yield put(authActions.setForgotPassword());
  } catch (error) {
    console.log(error);
  }
}

export function* confirmEmail({ payload }: PayloadAction<ConfirmEmailArgsT>) {
  try {
    yield call(authAPI.confirmEmailQuery, payload);
    yield put(authActions.setConfirmEmail());
  } catch (error) {
    console.log(error);
  }
}

export function* updatePassword({
  payload,
}: PayloadAction<UpdatePasswordArgsT>) {
  try {
    yield call(authAPI.updatePasswordQuery, payload);
    yield put(authActions.setUpdatePassword());
  } catch (error) {
    console.log(error);
  }
}
