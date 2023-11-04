import { call, put } from "redux-saga/effects";

import * as createPropertyAPI from "store/saga/api/createProperty.api";
import { createPropertyFormActions } from "store/reducers/createPropertyForm.reducer";

import {
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
  } catch (error) {
    console.log(error);
  }
}

export function* createProperty({
  payload,
}: PayloadAction<CreatePropertyArgsT>) {
  try {
    yield call(createPropertyAPI.createPropertyQuery, payload);
    yield put(createPropertyFormActions.setCreateProperty());
  } catch (error) {
    console.log(error);
  }
}
