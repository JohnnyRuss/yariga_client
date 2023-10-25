import { call, put } from "redux-saga/effects";

import * as propertiesAPI from "store/saga/api/properties.api";
import { propertiesActions } from "store/reducers/properties.reducer";

import {
  PropertyT,
  PropertyShortInfoT,
  PropertySuggestionsT,
  PropertyFilterResponseT,
} from "interface/db/properties.types";
import {
  GetPropertyArgsT,
  CreatePropertyArgsT,
} from "interface/store/properties.types";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

export function* getPropertyFormSuggestions() {
  try {
    const { data }: AxiosResponse<PropertySuggestionsT> = yield call(
      propertiesAPI.getPropertyFormSuggestionsQuery
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
    yield call(propertiesAPI.createPropertyQuery, payload);
    yield put(propertiesActions.setCreateProperty());
  } catch (error) {
    console.log(error);
  }
}

export function* getPropertyFilter() {
  try {
    const { data }: AxiosResponse<PropertyFilterResponseT> = yield call(
      propertiesAPI.getPropertyFilterQuery
    );

    yield put(propertiesActions.setPropertyFilter(data));
  } catch (error) {
    console.log(error);
  }
}

export function* getAllProperties({ payload }: PayloadAction<{}>) {
  try {
    const { data }: AxiosResponse<Array<PropertyShortInfoT>> = yield call(
      propertiesAPI.getAllPropertiesQuery
    );

    yield put(propertiesActions.setAllProperties(data));
  } catch (error) {
    console.log(error);
  }
}

export function* getProperty({ payload }: PayloadAction<GetPropertyArgsT>) {
  try {
    const { data }: AxiosResponse<PropertyT> = yield call(
      propertiesAPI.getPropertyQuery,
      payload
    );

    yield put(propertiesActions.setProperty(data));
  } catch (error) {
    console.log(error);
  }
}
