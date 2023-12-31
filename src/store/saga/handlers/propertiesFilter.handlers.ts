import { call, put } from "redux-saga/effects";
import { setError } from "./helpers/AppError";

import * as propertiesFilterAPI from "store/saga/api/propertiesFilter.api";
import { propertiesFilterActions } from "store/reducers/propertiesFilter.reducer";

import { AxiosResponse } from "axios";
import { PropertyFilterResponseT } from "interface/db/propertyFilter.types";

export function* getPropertyFilter() {
  try {
    const { data }: AxiosResponse<PropertyFilterResponseT> = yield call(
      propertiesFilterAPI.getPropertyFilterQuery
    );

    yield put(propertiesFilterActions.setPropertyFilter(data));
  } catch (error: any) {
    yield setError({
      error,
      location: "getPropertyFilter",
      errorSetter: propertiesFilterActions.setPropertiesFilterStatus,
    });
  }
}
