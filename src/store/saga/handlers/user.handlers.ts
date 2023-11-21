import { call, put } from "redux-saga/effects";
import { setError } from "./helpers/AppError";

import * as userAPI from "store/saga/api/user.api";
import { userActions } from "store/reducers/user.reducer";

import { AxiosResponse } from "axios";
import { UserT } from "interface/db/user.types";
import { PayloadAction } from "@reduxjs/toolkit";
import { GetGuestArgsT, UpdateUserArgsT } from "interface/db/user.types";

export function* getGuest({ payload }: PayloadAction<GetGuestArgsT>) {
  try {
    const { data }: AxiosResponse<UserT> = yield call(
      userAPI.getUserQuery,
      payload
    );

    yield put(userActions.setGuest(data));
  } catch (error: any) {
    yield setError({
      error,
      location: "getGuest",
      errorSetter: userActions.setGuestStatus,
    });
  }
}

export function* updateUser({ payload }: PayloadAction<UpdateUserArgsT>) {
  try {
    const { data }: AxiosResponse<UserT> = yield call(
      userAPI.updateUserQuery,
      payload
    );

    yield put(userActions.setUpdatedUser(data));
  } catch (error: any) {
    yield setError({
      error,
      location: "updateUser",
      errorSetter: userActions.setEditProfileStatus,
    });
  }
}
