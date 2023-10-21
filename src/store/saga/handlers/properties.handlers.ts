import { call, put } from "redux-saga/effects";

import * as propertiesAPI from "store/saga/api/properties.api";
import { propertiesActions } from "store/reducers/properties.reducer";

import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { CreatePropertyArgsT } from "interface/store/properties.types";
import { PropertyT, PropertySuggestionsT } from "interface/db/properties.types";

export function* getPropertyFormSuggestions() {
  try {
    const { data }: AxiosResponse<PropertySuggestionsT> = yield call(
      propertiesAPI.getPropertyFormSuggestions
    );

    yield put(propertiesActions.setPropertyFormSuggestions(data));
  } catch (error) {
    console.log(error);
  }
}

export function* createProperty({
  payload,
}: PayloadAction<CreatePropertyArgsT>) {
  try {
    yield call(propertiesAPI.createProperty, payload);
    yield put(propertiesActions.setCreateProperty());
  } catch (error) {
    console.log(error);
  }
}

export function* getAllProperties({ payload }: PayloadAction<{}>) {
  try {
    const { data }: AxiosResponse<Array<PropertyT>> = yield call(
      propertiesAPI.getAllPropertiesQuery
    );

    yield put(propertiesActions.setAllProperties(data));
  } catch (error) {
    console.log(error);
  }
}
