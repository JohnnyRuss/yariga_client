import { call, put } from "redux-saga/effects";
import { setError } from "./helpers/AppError";

import * as createPropertyAPI from "store/saga/api/createProperty.api";
import { createPropertyFormActions } from "store/reducers/createPropertyForm.reducer";

import {
  UpdatePropertyArgsT,
  CreatePropertyArgsT,
  PropertySuggestionsT,
} from "interface/db/createProperty.types";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

export function* getPropertyFormSuggestions() {
  try {
    const { data }: AxiosResponse<PropertySuggestionsT> = yield call(
      createPropertyAPI.getPropertyFormSuggestionsQuery
    );

    yield put(createPropertyFormActions.setPropertyFormSuggestions(data));
  } catch (error: any) {
    yield setError({
      error,
      location: "getPropertyFormSuggestions",
    });
  }
}

export function* createProperty({
  payload,
}: PayloadAction<CreatePropertyArgsT>) {
  try {
    yield call(createPropertyAPI.createPropertyQuery, payload);
    yield put(createPropertyFormActions.setCreateProperty());
  } catch (error: any) {
    yield setError({
      error,
      location: "createProperty",
      errorSetter: createPropertyFormActions.setCreatePropertyStatus,
    });
  }
}

export function* updateProperty({
  payload,
}: PayloadAction<UpdatePropertyArgsT>) {
  try {
    yield call(createPropertyAPI.updatePropertyQuery, payload);
    yield put(createPropertyFormActions.setCreateProperty());
  } catch (error: any) {
    yield setError({
      error,
      location: "updateProperty",
      errorSetter: createPropertyFormActions.setCreatePropertyStatus,
    });
  }
}
