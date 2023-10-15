import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { authActions } from "store/reducers/auth.reducer";
import * as authAPI from "store/saga/api/auth.api";

import { LoginResponseT } from "interface/db/user.types";
import { LoginArgsT } from "interface/store/auth.types";

export function* loginHandler({ payload }: PayloadAction<LoginArgsT>) {
  try {
    const { data }: AxiosResponse<LoginResponseT> = yield call(
      authAPI.loginQuery,
      payload
    );
    yield put(authActions.setAuthenticatedUser(data));
  } catch (error) {
    console.log(error);
  }
}

export function* logoutHandler() {
  try {
    yield call(authAPI.logoutQuery);
    yield put(authActions.cleanUpUser());
  } catch (error) {
    console.log(error);
  }
}
