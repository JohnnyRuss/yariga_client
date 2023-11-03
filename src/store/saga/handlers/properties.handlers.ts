import { call, put } from "redux-saga/effects";

import * as propertiesAPI from "store/saga/api/properties.api";
import { propertiesActions } from "store/reducers/properties.reducer";

import {
  PropertyT,
  RoomTypeT,
  PropertyShortInfoT,
  PropertySuggestionsT,
  PropertyFilterResponseT,
  CreatePropertyArgsT,
  GetPropertyArgsT,
  GetUserPropertiesArgsT,
  GetAgentPropertiesArgsT,
} from "interface/db/properties.types";
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

export function* getAllRoomTypes() {
  try {
    const { data }: AxiosResponse<Array<RoomTypeT>> = yield call(
      propertiesAPI.getAllRoomTypesQuery
    );

    yield put(propertiesActions.setAllRoomTypes(data));
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

export function* getUserProperties({
  payload,
}: PayloadAction<GetUserPropertiesArgsT>) {
  try {
    const { data }: AxiosResponse<Array<PropertyShortInfoT>> = yield call(
      propertiesAPI.getUserPropertiesQuery,
      payload
    );

    yield put(propertiesActions.setAllProperties(data));
  } catch (error) {
    console.log(error);
  }
}

export function* getAgentProperties({
  payload,
}: PayloadAction<GetAgentPropertiesArgsT>) {
  try {
    const {
      data,
    }: AxiosResponse<{ _id: string; listing: Array<PropertyShortInfoT> }> =
      yield call(propertiesAPI.getAgentPropertiesQuery, payload);

    yield put(propertiesActions.setAllProperties(data.listing));
  } catch (error) {
    console.log(error);
  }
}
