import { call, put } from "redux-saga/effects";

import * as userAPI from "store/saga/api/user.api";
import { userActions } from "store/reducers/users.reducer";

import { AxiosResponse } from "axios";
import { UserT } from "interface/db/user.types";
import { PayloadAction } from "@reduxjs/toolkit";
import { GetUserArgsT } from "interface/db/user.types";

export function* getUser({ payload }: PayloadAction<GetUserArgsT>) {
  try {
    const { data }: AxiosResponse<UserT> = yield call(
      userAPI.getUserQuery,
      payload
    );

    yield put(userActions.setUser(data));
  } catch (error) {
    console.log(error);
  }
}
