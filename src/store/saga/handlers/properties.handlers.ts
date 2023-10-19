import { call, put } from "redux-saga/effects";

import * as propertiesAPI from "store/saga/api/properties.api";
import { propertiesActions } from "store/reducers/properties.reducer";

// import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { CreatePropertyArgsT } from "interface/store/properties.types";

export function* createProperty({
  payload,
}: PayloadAction<CreatePropertyArgsT>) {
  try {
    yield call(propertiesAPI.createProperty, payload);
    yield put(propertiesActions.setCreateProperty());
  } catch (error) {}
}

export function* getAllProperties({ payload }: PayloadAction<{}>) {
  try {
  } catch (error) {}
}
