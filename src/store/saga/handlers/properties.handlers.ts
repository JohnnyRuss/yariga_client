import { call, put } from "redux-saga/effects";

import * as propertiesAPI from "store/saga/api/properties.api";
import { propertiesActions } from "store/reducers/properties.reducer";

import {
  PropertyT,
  PropertyShortInfoT,
  GetPropertyArgsT,
  GetUserPropertiesArgsT,
  GetAgentPropertiesArgsT,
  RatePropertyArgsT,
  RatePropertyResponseT,
} from "interface/db/properties.types";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

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

export function* getUserProperties({
  payload,
}: PayloadAction<GetUserPropertiesArgsT>) {
  try {
    const { data }: AxiosResponse<Array<PropertyShortInfoT>> = yield call(
      propertiesAPI.getUserPropertiesQuery,
      payload
    );

    yield put(propertiesActions.setUserProperties(data));
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

    yield put(propertiesActions.setAgentProperties(data.listing));
  } catch (error) {
    console.log(error);
  }
}

export function* rateProperty({ payload }: PayloadAction<RatePropertyArgsT>) {
  try {
    const { data }: AxiosResponse<RatePropertyResponseT> = yield call(
      propertiesAPI.ratePropertyQuery,
      payload
    );

    yield put(propertiesActions.setPropertyRate(data));
  } catch (error) {
    console.log(error);
  }
}
