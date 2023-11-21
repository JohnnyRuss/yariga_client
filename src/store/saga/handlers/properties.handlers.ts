import { call, put } from "redux-saga/effects";
import { setError } from "./helpers/AppError";

import * as propertiesAPI from "store/saga/api/properties.api";
import { propertiesActions } from "store/reducers/properties.reducer";

import {
  PropertyT,
  PropertyShortInfoT,
  GetPropertyArgsT,
  GetUserPropertiesArgsT,
  GetAgentPropertiesArgsT,
  GetAllPropertiesArgsT,
  GetAllPropertiesResponseT,
  GetRelatedPropertiesArgsT,
} from "interface/db/properties.types";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

export function* getAllProperties({
  payload,
}: PayloadAction<GetAllPropertiesArgsT>) {
  try {
    const { data }: AxiosResponse<GetAllPropertiesResponseT> = yield call(
      propertiesAPI.getAllPropertiesQuery,
      payload
    );

    yield put(propertiesActions.setAllProperties(data));
  } catch (error: any) {
    yield setError({
      error,
      location: "getAllProperties",
      errorSetter: propertiesActions.setAllPropertiesStatus,
    });
  }
}

export function* getProperty({ payload }: PayloadAction<GetPropertyArgsT>) {
  try {
    const { data }: AxiosResponse<PropertyT> = yield call(
      propertiesAPI.getPropertyQuery,
      payload
    );

    yield put(propertiesActions.setProperty(data));
  } catch (error: any) {
    yield setError({
      error,
      location: "getProperty",
      errorSetter: propertiesActions.setPropertyStatus,
    });
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

    yield put(propertiesActions.setUserProperties(data));
  } catch (error: any) {
    yield setError({
      error,
      location: "getUserProperties",
      errorSetter: propertiesActions.setUserPropertiesStatus,
    });
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

    yield put(propertiesActions.setAgentProperties(data.listing));
  } catch (error: any) {
    yield setError({
      error,
      location: "getAgentProperties",
      errorSetter: propertiesActions.setAgentPropertiesStatus,
    });
  }
}

export function* getRelatedProperties({
  payload,
}: PayloadAction<GetRelatedPropertiesArgsT>) {
  try {
    const { data }: AxiosResponse<Array<PropertyShortInfoT>> = yield call(
      propertiesAPI.getRelatedPropertiesQuery,
      payload
    );

    yield put(propertiesActions.setRelatedProperties(data));
  } catch (error: any) {
    yield setError({
      error,
      location: "getRelatedProperties",
      errorSetter: propertiesActions.setRelatedPropertiesStatus,
    });
  }
}
